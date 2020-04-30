import React from 'react';
import { Link } from "react-router-dom";
import './Subhead.css';
function Subhead() {
    return (
        <div className="subhead">
            <div className="subhead_inner">
                <div className="subhead_links">
                    <div className="subhead_link">
                        <Link to="/constructor">
                            constructor
                        </Link>
                    </div>
                    <div className="subhead_link">
                        <Link to="/help">
                            help
                        </Link>
                    </div>
                    <div className="subhead_link">
                        <Link to="/users_panel">
                            users panel
                        </Link>
                    </div>
                    <div className="subhead_link">
                        <Link to="/faq">
                            faq
                        </Link>
                    </div>
                    <div className="subhead_link">
                        <Link to="/about">
                            about
                        </Link>
                    </div>
                    <div className="subhead_link">
                        <Link to="/blog">
                            blog
                        </Link>
                    </div>
                </div>
                <div className="subhead_quick-links">
                    <div className="subhead_favourite"></div>
                    <div className="subhead_search"></div>
                </div>
            </div>

        </div>
    );
}

export default Subhead;
