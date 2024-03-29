import React from 'react';
import PropTypes from 'prop-types';
import { FiMenu } from "react-icons/fi";
import Breadcrumbs from './Breadcrumbs';
import ToolMenu from './ToolMenu/ToolMenu';

const propTypes = {
  testTitle: PropTypes.string,
  sectionData: PropTypes.object.isRequired,
  toggleTheme: PropTypes.func
};

function Header(props) {
  return (
    <header className="top-bar">
        <button aria-label="main menu" className="menu-button">
            <FiMenu></FiMenu>
        </button>
        <h1 id="assessment_name">
            <Breadcrumbs
                testTitle={props.testTitle}
                sectionTitle={props.sectionData.title}
                sectionNo={props.sectionData.position + 1}
                sectionsTotal={3}>
            </Breadcrumbs>
            <span className="timer" id="demo-timer" aria-label="Time remaining in this part: ">09:59</span>
        </h1>
        <ToolMenu toggleTheme={props.toggleTheme}></ToolMenu>
    </header>
  );
}

Header.propTypes = propTypes;

export default Header;
