import React, { useState } from 'react';
import SearchComp from '../Components/SearchComp';
import { useStateValue } from '../StateProvider';
import '../Styles/ResultsHeaderPage.css';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function ResultsHeaderPage() {

    const [{searchInput}, dispatch] = useStateValue();
    //Actual google API call.
    const {data} = useGoogleSearch(searchInput);
    //Local api call
    //const data = Response;

    console.log("data==",data)
    return (
        <div className = "searchresultspage">
            <div className = "searchpage__header">
                <Link to = "/">
                    <img className = "searchresultspage__logo" src = "http://pngimg.com/uploads/google/google_PNG19644.png" alt= ""/>
                </Link>
                <div className = "searchresultspage__headerbody">
                    <SearchComp hideButtons/>
                    <div className = "searchresultspage__options">
                        <div className = "searchresultspage__optionsLeft">
                            <div className = "searchresultspage__opt">
                                <SearchIcon/>
                                <Link to = "/all">All</Link>
                            </div>
                            <div className = "searchresultspage__opt">
                                <DescriptionIcon/>
                                News
                            </div>
                            <div className = "searchresultspage__opt">
                                <ImageIcon/>
                                Images
                            </div>
                            <div className = "searchresultspage__opt">
                                <LocalOfferIcon/>
                                Shopping
                            </div>
                            <div className = "searchresultspage__opt">
                                <RoomIcon/>
                                Maps
                            </div>
                            <div className = "searchresultspage__opt">
                                <MoreVertIcon/>
                                More
                            </div>
                        </div>
                        <div className = "searchresultspage__optionsRight">
                            <div className="searchresultspage__opt">
                                <Link to = "/settings">Settings</Link>
                            </div>
                            <div className = "searchresultspage__opt">
                                <Link to = "/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {searchInput && (
                <div className = "searchresults__results">
                    <p className = "searchresults__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results 
                        ({data?.searchInformation.formattedSearchTime} secounds) for {searchInput}
                    </p>
                    {data?.items.map(item => (
                        <div className = "searchresultspage__listlink">
                            <a className = "searchresultspage__listTitle" href = {item.link}>
                                {item.pagemap.cse_image?.length > 0 && item.pagemap.cse_image[0]?.src 
                                && ( <img src = {item.pagemap.cse_image[0]?.src} alt = ""
                                className = "searchresultspage__listImg"/>)}
                                {item.displayLink}
                            </a>
                            <a className = "searchresultspage__listTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className = "searchresultspage__listSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ResultsHeaderPage;
