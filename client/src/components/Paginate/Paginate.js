import React, { Component } from 'react';
import propTypes from 'prop-types';

//Styles
import {
  PageNumberContainer,
  PageNumber,
  ArrowContainer,
  NumberWrap,
} from './styles';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

class Paginate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPages: null,
      dataStartingIndex: null,
      dataLastIndex: 0,
      currentClickedNumber: 1,
      pageData: null,
    };
  }

  determineNumberOfPages = () => {
    const { data, itemsPerPage } = this.props;
    let paginatedDataObject = {};

    let index = 0;
    let dataLength = data.length;
    let chunkArray = [];

    for (index = 0; index < dataLength; index += itemsPerPage) {
      let newChunk = data.slice(index, index + itemsPerPage);
      chunkArray.push(newChunk);
    }

    chunkArray.forEach((chunk, i) => {
      paginatedDataObject[i + 1] = chunk;
    });

    console.log(itemsPerPage);

    this.setState({
      totalPages: chunkArray.length,
      dataStartingIndex: itemsPerPage,
      pageData: paginatedDataObject,
      clickedOnNumber: 1,
    });
  };

  setCurrentClickedNumber = (e) => {
    const { target } = e;
    this.setState({
      currentClickedNumber: parseInt(target.innerText),
    });
  };

  moveToLastPage = () => {
    this.setState({
      currentClickedNumber: this.state.totalPages,
      currentClickedPage: this.state.totalPages,
    });
  };

  moveToFirstPage = () => {
    this.setState({
      currentClickedNumber: 1,
      currentClickedPage: 1,
    });
  };

  moveOnePageForward = () => {
    const { dataStartingIndex, totalPages } = this.state;

    if (dataStartingIndex) {
      this.setState({
        dataStartingIndex: null,
        currentClickedNumber: 2,
      });
    } else {
      this.setState({
        currentClickedNumber:
          this.state.currentClickedNumber + 1 > totalPages
            ? totalPages
            : this.state.currentClickedNumber + 1,
      });
    }
  };

  moveOnePageBackward = () => {
    this.setState({
      currentClickedNumber:
        this.state.currentClickedNumber - 1 < 1
          ? 1
          : this.state.currentClickedNumber - 1,
    });
  };

  componentDidMount() {
    this.determineNumberOfPages();
  }

  componentDidUpdate(prevProps, prevState) {
    const { data, setData } = this.props;
    const { currentClickedNumber, pageData } = this.state;

    if (data !== prevProps.data) {
      this.determineNumberOfPages();
    }

    if (currentClickedNumber !== prevState.currentClickedNumber) {
      setData(pageData[currentClickedNumber]);
    }
  }

  pageNumberRender = () => {
    const { totalPages, currentClickedNumber } = this.state;
    let pages = [];
    for (let i = 1; i < totalPages + 1; i++) {
      pages.push(
        <PageNumber
          onClick={(e) => {
            this.setCurrentClickedNumber(e);
          }}
          isClicked={currentClickedNumber === i ? true : false}
          key={i}
        >
          {i}
        </PageNumber>
      );
    }
    return pages;
  };

  render() {
    const { currentClickedNumber, totalPages } = this.state;
    return (
      <div>
        <PageNumberContainer>
          <ArrowContainer>
            {currentClickedNumber > 1 ? (
              <div>
                <span>
                  <FontAwesomeIcon
                    onClick={this.moveToFirstPage}
                    icon={faAngleDoubleLeft}
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    onClick={this.moveOnePageBackward}
                    icon={faAngleLeft}
                  />
                </span>
              </div>
            ) : (
              <div />
            )}
          </ArrowContainer>
          <NumberWrap>{this.pageNumberRender()}</NumberWrap>
          <ArrowContainer>
            {currentClickedNumber !== totalPages ? (
              <div>
                <span>
                  <FontAwesomeIcon
                    onClick={this.moveOnePageForward}
                    icon={faAngleRight}
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    onClick={this.moveToLastPage}
                    icon={faAngleDoubleRight}
                  />
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </ArrowContainer>
        </PageNumberContainer>
      </div>
    );
  }
}

export default Paginate;

Paginate.propTypes = {
  data: propTypes.array.isRequired,
  setData: propTypes.func.isRequired,
  itemsPerPage: propTypes.number.isRequired,
};
