import React, { Component } from 'react'
import Newsitems from './Newsitems'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.props.category} - NewsApp`;
    }
    async updateNews() {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e7fb9d74996143bdb8121aa62661745c&page=${this.state.page}&pageSize=${this.props.PageSize}`;
        let data = await fetch(url);
        this.props.setProgress(50);
        let parseData = await data.json();
        console.log(parseData);
        this.props.setProgress(70);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e7fb9d74996143bdb8121aa62661745c&page=${this.state.page}&pageSize=${this.props.PageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults })
    };
    render() {
        return (
            <>
                <h1 className='text-center' style={{ margin: '40px' }}>TOP <i>{this.props.category}</i> HEADLINES</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    // loader={<h4>Loading...</h4>}
                >
                    <div className="container">
                        <div className='row my-1'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4' key={element.url} >
                                    <Newsitems title={element.title ? element.title : ''} description={element.description ? element.description : ''} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.PageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>

                </div> */}
            </>
        )
    }
}
export default News
