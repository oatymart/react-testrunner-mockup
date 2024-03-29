import React from 'react';
import PropTypes from 'prop-types';
import { TiInfoLarge } from 'react-icons/ti';
import { FaBookmark } from 'react-icons/fa';

const propTypes = {
    showItem: PropTypes.func.isRequired,
    itemId: PropTypes.string.isRequired,
    sectionId: PropTypes.string.isRequired,
    itemData: PropTypes.object,
    isInformational: PropTypes.bool,
    isActive: PropTypes.bool,
    isViewed: PropTypes.bool,
    isAnswered: PropTypes.bool,
    isBookmarked: PropTypes.bool
};

const defaultProps = {
    isInformational: false,
};

// class NavigationBubble extends React.Component {
function NavigationBubble(props) {
    return (
        <li className={'navBubble ' + (props.isActive ? 'active ' : '') + (props.isViewed ? 'viewed ' : '') + (props.isAnswered ? 'answered ' : '')}>
            <a
                className="bubble-content"
                aria-label={`Question ${props.itemId} ${props.isAnswered ? '(Answered)' : ''}`}
                onClick={props.showItem.bind(null, props)}>
                { props.isInformational && <TiInfoLarge className="informational"></TiInfoLarge> }
                { !props.isInformational && (props.itemData.positionInPart + 1).toString().padStart(2,'0') }
                { props.isBookmarked && <FaBookmark className="mini-indicator"></FaBookmark>}
            </a>
        </li>
    );
}

NavigationBubble.propTypes = propTypes;
NavigationBubble.defaultProps = defaultProps;

export default NavigationBubble;
