import React from "react";
import { Navbar } from "./Navbar";
import { useSelector } from "react-redux";


const Home = ({ children }) => {
    const isNavbarVisible = useSelector((state) => state.layout.navbar);

    return (
        <>
            <div className="wrapper">
                <Navbar />

                <div id="content" className={!isNavbarVisible ? "active" : ""}>
                    {process.env.NODE_ENV === "production" && (
                        <div className="user-notification"></div>
                    )}

                    {children}
                </div>
            </div>
        </>
    );
};

export default Home;
