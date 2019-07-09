/**
 * @file index.jsx
 * @author houyl@jingoal.com
 *
 * 标签页示例
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from '../src/index';

import '../style/Tabs.css';
import './index.css';

const numberOfTabs = 8;
const tabs = [...new Array(numberOfTabs)].map((_, i) => `tab${i}`);

const tabPanelStyle = {
    container: {
        overflow: 'hidden',
        visibility: 'hidden',
        position: 'relative'
    },
    wrapper: {
        overflow: 'hidden',
        position: 'relative'
    },
    child: {
        float: 'left',
        width: '100%',
        position: 'relative',
        transitionProperty: 'transform',
        height: '250px'
    }
}

/* eslint-disable no-console*/
const onChange = index => console.log(`onChange:${index}`)

const transitionEnd = index => console.log(`transitionEnd:${index}`)
/* eslint-enable no-console*/

const TabsExample = () => (
    <Tabs
        defaultIndex={0}
        onChange={onChange}
        transitionEnd={transitionEnd}
        tabs={tabs}
        tabPanelStyle={tabPanelStyle}
        className="myTabs"
    >
        {[...new Array(numberOfTabs)].map((_, i) => {
            return (
                <div key={i}>
                    <div className="myItem">{i}</div>
                </div>
            )
        }
        )}
    </Tabs>
)

function App() {
    

}


if (document.getElementById('root')) {
    ReactDOM.render(
        <TabsExample />, document.getElementById('root')
    )
}

export default TabsExample;
