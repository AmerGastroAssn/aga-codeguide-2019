import React from "react";
import "./App.css";
import Pagination from "react-paginating";

import Axios from "axios";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";

export class CommentList extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  render() {
    let commentNodes = this.props.data.map(function(comment, index) {
      return <div key={index}>{comment.comment}</div>;
    });

    return (
      <div id="project-comments" className="commentList">
        <ul>{commentNodes}</ul>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    data: []
  };

  getData = () => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(json => {
        console.log(json.data);
        this.setState({
          data: json.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="App">
        <h5>Pagination</h5>
        <CommentList data={this.state.data} />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default App;
