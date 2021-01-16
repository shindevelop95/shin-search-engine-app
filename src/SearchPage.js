import React from 'react'
import './SearchPage.css'
import {useStateValue} from './StateProvder'
import useGoogleSearch from "./useGoogleSearch";
import Response from './Response';
import {Link} from 'react-router-dom'
import Search from "./pages/Search"
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import MoreVertIcon from "@material-ui/icons/MoreVert"

function SearchPage() {

    const [{term = 'pokemon'},dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);
   // const data = Response;

    console.log(data)
    return (
        <div className="searchPage">
            <div className='searchPage__header'>
               <Link to="/">
                   <img
                        className="searchPage__logo"
                        src="data:image/png;base64,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" 
                        alt="hello"

                   />
               </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon/>
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon/>
                                <Link to="/all">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon/>
                                <Link to="/all">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon/>
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon/>
                                <Link to="/all">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon/>
                                <Link to="/all">More</Link>
                            </div>
                        </div>

                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && (<div className="searchPage__result">
                <p className="searchPage__resultCount">
                    About {data?.searchInformation.formattedTotalResults} results
                    ({data?.searchInformation.formattedSearchTime} second) for {term}
                </p>
                {data?.items.map(item => (
                    <div className='searchPage__result'>
                       <a href={item.link}>{(<img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=""/>)} {item.displayLink}</a>
                       <a className="searchPage__resultTitle" href={item.link}> {item.title}</a>
                       <p className="searchPage__resultSnippet">{item.snippet}</p>
                    </div>

                ))}
            </div>)}
                    </div>
    )
}

export default SearchPage
