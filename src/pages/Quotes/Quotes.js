import React, { useEffect, useState } from "react";
import Axios from "axios";
import * as AiIcons from "react-icons/ai";
import "./Quotes.css";
function Quotestr(props) {
  return (
    <>
      <div className="quote-text">
        <b>"</b>
        {props.text}
      </div>
      <div className="quote-author">- {props.author}</div>
    </>
  );
}

const Quote = ({ selectedquote, selectrandindex }) => {
  return (
    <>
      <div className="getBackColour">
        <Quotestr
          text={selectedquote() && selectedquote().quote}
          author={selectedquote() && selectedquote().author}
        />
        <button
          onClick={() => {
            window.location.href = `https://twitter.com/intent/tweet?url=&text=${
              selectedquote() && selectedquote().quote
            }`;
          }}
          className="button tweet"
          title="Tweet this quote"
        >
          <AiIcons.AiOutlineTwitter />
        </button>
        <button
          onClick={() => {
            window.location.href = `http://www.tumblr.com/share?v=3&u=&t=${
              selectedquote() && selectedquote().quote
            }`;
          }}
          className="button tumbler"
          title="Share on Tumbler"
        >
          t
        </button>
        <button className="button newquote" onClick={selectrandindex}>
          New Quote
        </button>
      </div>
    </>
  );
};

export default function App() {
  const [datarray, setdataarray] = useState([]);
  const [srandind, setranind] = useState(0);
  useEffect(() => {
    function getfetchurl() {
      return "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";
    }

    const fetchdata = async () => {
      const result = await Axios(getfetchurl());
      const quotes = result.data;
      setdataarray(quotes);
      setranind(Math.floor(Math.random() * datarray.length));
    };
    fetchdata().then(() => {});
  }, [datarray.length]);

  function quoteselection() {
    if (!datarray.length || !Number.isInteger(srandind)) {
      return undefined;
    }
    return datarray[srandind];
  }

  function indexfunc() {
    setranind(generatequoteindex());
  }

  function generatequoteindex() {
    if (!datarray.length) {
      return undefined;
    }

    return Math.floor(Math.random() * datarray.length);
  }

  // console.log(datarray.length, datarray);

  return (
    <div className="quote-box">
      <Quote selectedquote={quoteselection} selectrandindex={indexfunc} />
    </div>
  );
}
