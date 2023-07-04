import React from "react";
import withExternalInfo from "hoc/withExternalInfo";


const ExternalInfo = ({ code = "", tutorial = "" }) => {
   

    return (
        <h6 className="text-center">
           
            {code && (
                <a
                    href={code}
                    target="_blank"
                    onClick={(e) =>
                        GAEventsTracker("Github Tutorials Page", code)
                    }
                    rel="noopener noreferrer"
                >
                    <span className="badge badge-secondary mr-2 p-3">
                        Github Source Code{" "}
                        <i className="fas fa-external-link-alt"></i>
                    </span>
                </a>
            )}
        </h6>
    );
};

export default withExternalInfo(ExternalInfo);
