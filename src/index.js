import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Post from './components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        title: 'Valdir Coxev',
        time: 'há 5 min',
        avatar: 'https://ui-avatars.com/api/?name=Valdir+Coxev',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        title: 'Diego Schell',
        time: 'há 5 min',
        avatar: 'https://ui-avatars.com/api/?name=Diego+Schell',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
      {
        title: 'Maria Pimenta',
        time: 'há 50 min',
        avatar: 'https://ui-avatars.com/api/?name=Maria+Pimenta',
        description: 'It is a long established fact that a read.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <Post posts={posts} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
