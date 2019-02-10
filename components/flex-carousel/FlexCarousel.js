import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Button from 'react-toolbox/lib/button';
import {
    WINDOW_RESIZE_EVENT,
    BUTTON_ICON_NEXT,
    BUTTON_ICON_PREV
} from './constants.js';

class FlexCarousel extends Component{
    static propTypes = {
        children: PropTypes.array,
        itemWidth: PropTypes.number,
        theme: PropTypes.shape({
            wrapper: PropTypes.string,
            container: PropTypes.string,
            isReverse: PropTypes.string,
            customButton: PropTypes.string,
            left: PropTypes.string,
            right: PropTypes.string,
            item: PropTypes.string,
            forTransitionWorks: PropTypes.string
        })
    };

    constructor (props){
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    componentDidMount (){
        window.addEventListener(WINDOW_RESIZE_EVENT, this.handleResize.bind(this));
        const amountOfItems = this.calculateWidth();
        if (amountOfItems){
            this.setState({
                amountOfItems
            });
        }
    }
    componentWillUnmount (){
        window.removeEventListener(WINDOW_RESIZE_EVENT, this.handleResize.bind(this));
    }

    handleResize (){
        if (this.refs.scroll){
            this.setState({
                amountOfItems: this.calculateWidth()
            });
        }
    }

    calculateWidth (){
        if (this.refs) {
            const container = ReactDOM.findDOMNode(this.refs.scroll);
            if (container) {
                const containerWidth = container.offsetWidth;
                return Math.floor(containerWidth / (this.props.itemWidth + 20));
            }
        } else {
            return false;
        }
    }

    renderControls (){
        const {theme, children} = this.props;
        const {currentIndex, amountOfItems} = this.state;
        const controlsArray = [];
        let nextButtonProps = null;
        let prevButtonProps = null;
        if (currentIndex !== 0) {
            prevButtonProps = {
                icon: BUTTON_ICON_PREV,
                className: classnames(theme.customButton, theme.left),
                onClick: (e)=>this.setState({currentIndex: currentIndex - 1})
            };
            controlsArray.push(prevButtonProps);
        }
        if (amountOfItems + currentIndex < children.length) {
            nextButtonProps = {
                icon: BUTTON_ICON_NEXT,
                className: classnames(theme.customButton, theme.right),
                onClick: (e)=>this.setState({currentIndex: currentIndex + 1})
            };
            controlsArray.push(nextButtonProps);
        }
        return controlsArray.map((btnProps, index)=>(<Button key={index} flat {...btnProps}/>));
    }


    renderItems (items = []){
        const {theme, itemWidth} = this.props;
        const _itemWidth = itemWidth + 'px';
        const ch = React.Children.map(items, (el, index)=>{
            return (<li key={index + '_index'}
                        className={theme.scrollItem}
                        style={{minWidth: _itemWidth, maxWidth: _itemWidth}}>
                {el}</li>);
        });
        return ch.slice(this.state.currentIndex, this.state.amountOfItems + this.state.currentIndex);

    }
    render (){
        const {children, theme} = this.props;
        const sForScrollContainer = children.length > this.state.amountOfItems ? 'space-around' : 'flex-start';
        return (
            <div className={theme.wrapper}>
                <ul className={theme.scrollContainer} ref="scroll" style={{
                    justifyContent: sForScrollContainer
                }}>
                    {this.renderItems(children)}
                </ul>
                {this.renderControls()}
            </div>
        );
    }
}

export default FlexCarousel;

