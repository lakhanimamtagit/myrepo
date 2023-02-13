import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { loadUsersStart, loadArticleStart } from "../redux/action";
import SearchForm from '../Search';

function Books() {
    let { docs } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const [articles, setAritcle] = useState([]);
    const [category, setCategory] = useState('election');
    const [loading, setLoading] = useState(true);
    let temp;
    useEffect(()=>{
        dispatch(loadUsersStart());
    },[])
    useEffect(() => {

            const fetchArticle = async () => {
                const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key= ${process.env.REACT_APP_API_KEY}`);
                console.log(res);
                setAritcle(res.data.response.docs);
                docs = res.data.response.docs;
                setLoading(false);
                console.log(res.data.response.docs);
                console.log(docs);
            }

            fetchArticle();
        

       // fetchArticle();
        // setAritcle(docs);
        // dispatch(loadArticleStart(category));
        // console.log("docs", docs);
    }, [category]);
    return (
        <div>
            <div>
                <h1> Articles are  about {category}</h1>
                <SearchForm textSearch={(text) => setCategory(text)} />
            </div>
            <br />
            <h1>List of Article</h1>
            <table style={{ border: 'solid 1px black' }} >
                <thead>
                    <tr style={{
                        borderBottom: 'solid 3px red',
                        color: 'black',
                    }}>
                        <th style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                        }}>Main</th>
                        <th style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                        }}>Abstract</th>
                        <th style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                        }}>Weblink</th>
                        <th style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                        }}>Lead para</th>
                        <th style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                        }}>Name</th>
                    </tr>
                </thead>
                <tbody>
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


                            <tr>

                                <td style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                }}><h2>{main}</h2></td>
                                <td style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                }}><h4>{abstract}</h4> </td>
                                <td style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                }}><a href={web_url} target="_blank"> Web Resource</a></td>
                                <td style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                }}><p>{lead_paragraph}</p></td>
                                <td style={{
                                    padding: '10px',
                                    border: 'solid 1px gray',
                                }}>
                                    <ul>
                                        <li>{original}</li>
                                        <li>{news_desk}</li>
                                        <li>{section_name}</li>
                                        <li>{word_count}</li>
                                    </ul>
                                </td>
                            </tr>

                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Books;
