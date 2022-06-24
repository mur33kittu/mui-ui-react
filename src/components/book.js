import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Card from './card';

function Books (props) {
  const bookData = props.data;
  const [content, setContent] = useState ([]);
  const [author, setAuthor] = useState({
    author: '',
    birthday: '',
    birthPlace: ''
  });
  const [modifiedBooks, setModifiedBooks] = useState([]);

  useEffect(() => {
      if(bookData?.books?.status) {
        props.setSortedBooks(bookData?.books);
        setAuthor({
          author: bookData?.books?.data?.author,
          birthday: bookData?.books?.data?.birthday,
          birthPlace: bookData?.books?.data?.birthPlace
        });
        setModifiedBooks(bookData?.books?.data.books || []);
        cardItem(bookData?.books?.data.books)
      }
  }, [bookData?.books?.status]);

  useEffect(() => {
    rerender();
    if(props?.data?.sortedBooks?.status) {
      setModifiedBooks(bookData?.books?.data.books);
      // cardItem(bookData?.sortedBooks?.data?.books)
    }    
  },[props.toggle, bookData?.books])

  function arraysAreEqual(ary1,ary2){
    return (ary1.join('') == ary2.join(''));
  }
  
  useEffect(() => {
    if(modifiedBooks?.length > 0) {
      cardItem(modifiedBooks)
    }    
  },[modifiedBooks]);

  function rerender() {
    if(props.toggle.key === 'publishDate') {
      if(props.toggle.value) {
        let tempBooks = [...bookData?.books?.data?.books];
        if(!arraysAreEqual(tempBooks, modifiedBooks)) {
          tempBooks = modifiedBooks
        }
        const bks = tempBooks.sort((a, b) => a.PublishDate - b.PublishDate)
        props.setSortedBooks(bks)
        setModifiedBooks(bks)
      } else {
        props.setSortedBooks(bookData?.books?.data?.books);
        setModifiedBooks(bookData?.books?.data?.books)
      }
    }
    if(props.toggle.key === 'title') {
      if(props.toggle.value) {
        let tempBooks = [...bookData?.books?.data?.books];
        if(!arraysAreEqual(tempBooks, modifiedBooks)) {
          tempBooks = modifiedBooks
        }
        const bks = tempBooks.sort((a, b) => {
          const aa = a.title
          const bb = b.title
          return aa == bb ? 0: aa > bb ? 1: -1
        })
        props.setSortedBooks(bks)
        setModifiedBooks(bks)
      } else {
        props.setSortedBooks(bookData?.books?.data?.books);
        setModifiedBooks(bookData?.books?.data?.books)
      }
    }
  }
  const cardItem = p => {
    const rows = [...Array (Math.ceil (p?.length / 5))] || 0;
    const bookRows = rows.map ((row, idx) =>
      p.slice (idx * 5, idx * 5 + 5)
    ) || [];

    const content = bookRows.map ((row, idx) => (
      <div
        className="row"
        key={row.id}
        style={{margin: '10px 10px'}}
      >
        {row.map (book => (
          <Card
            key={row.id}
            className="col-md-3"
            {...book}
          />
        ))}
      </div>
    ));
    setContent (content);
  };


  function onChange(e) {
    props.changeToggleStatus({key: e.target.id, value: e.target.checked});    
  }
    
  return (
    <div className="container-fluid">
      <div className="row">
        {author && (
          <div className="card" style={{"margin": "30px 10px 20px", "width": "95%"}}>
            <div className="card-body">
              <h5 className="card-title">{author.author}</h5>
              <p className="card-text">{author.birthday}<br/>{author.birthPlace}</p>
            </div>
            <div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="title" onChange={e => onChange(e)} />
              <label className="form-check-label" htmlFor="title">Sort By Title</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="publishDate" onChange={e => onChange(e)} />
              <label className="form-check-label" htmlFor="publishDate">Sort By Publish Date</label>
            </div>
            </div>
          </div>
        )}        
      </div>
      {content}
      </div>
  );
}

function mapStateToProps (state) {
  return {data: state.books, toggle: state.toggle};
}

export default connect (mapStateToProps, actions) (Books);
