import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './Search';


function Articles() {
    const [articles, setAritcle] = useState([]);
    const [category, setCategory] = useState('science');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchArticle = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key= ${process.env.REACT_APP_API_KEY}`);
            console.log(res);
            setAritcle(res.data.response.docs);
            setLoading(false);
            console.log(res.data.response.docs);
        }

        fetchArticle();
    }, [category])
    return (
        <div>
            <div>
                <h1> Articles are  about {category}</h1>
                <SearchForm textSearch={(text) => setCategory(text)}/>
            </div>
            <h1>Article</h1>
          { loading ?   <h1>Loading...</h1> : <section>
                {articles.map((article) => {
                    const {
                        abstract,
                        headline: { main },
                        byline: { original },
                        lead_paragraph,
                        news_desk,
                        section_name,
                        web_url,
                        _id,
                        word_count,

                    } = article
                    return (
                    <article key={abstract}>
                        <h2>{main}</h2>
                        <h4>{abstract}</h4>
                        <a href={web_url} target="_blank"> Web Resource</a>
                        <p>{lead_paragraph}</p>

                        <ul>
                            <li>{original}</li>
                            <li>{news_desk}</li>
                            <li>{section_name}</li>
                            <li>{word_count}</li>
                        </ul>
                    </article>);
                })}
            </section>}
        </div>
    );
}

export default Articles;
