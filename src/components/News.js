import React, { useEffect,useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




const News = (props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

      
    const capitaliseFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    
      
      const UpdateNews = async ()=> {
        props.setProgress(30);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
        console.log(parsedData);  
        
      }
      useEffect(() => {
        document.title = `${capitaliseFirstLetter(props.category)} - NewsApp`;
        UpdateNews();
      }, [])

         const handlePrevClick = async()=>{
            setPage(page-1)
            UpdateNews();
          }

        const  handleNextClick = async()=>{
          setPage(page+1)
          UpdateNews();
        }
       const fetchMoreData = async () => {
          setPage(page+1)
          const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
          let data = await fetch(url);
          let parsedData = await data.json()
          setArticles(articles.concat(parsedData.articles))
          setTotalResults(parsedData.totalResults)
         
        };

  
    return (
      <div className='container my-3'>
      <h1 className="text-center" style={{margin:"35px 0px", marginTop : "90px"}}>Top {capitaliseFirstLetter(props.category)} Headlines</h1>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

        <div className="container">
        <div className="row my-3">
            { articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageurl ={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            })}      
        </div>
        </div>
        </InfiniteScroll>
        </div>
    )
  }


News.defaultProps = {
  country : 'us',
  pageSize : '6',
  categoty : 'general'
}

News.propTypes ={
  country : PropTypes.string,
  pageSize : PropTypes.number,
  categoty : PropTypes.string
}

export default News