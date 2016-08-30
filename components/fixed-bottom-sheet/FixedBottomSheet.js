import React, {PropTypes, Component} from 'react';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import Button from 'react-toolbox/lib/button';
import {CardTitleButtons} from '../../components/card-addons';

const ICON_EXPAND = 'expand_more';
const ICON_LESS = 'expand_less';

class FixedBottomSheet extends Component{
    constructor (props){
        super(props);
        this.state = {
            expanded: false
        };
    }
    renderChildren (children){
        const {expanded} = this.state;
        if (!expanded) {
            return (
                <div className={theme['fixedBottomSheet--header']}>
                    {children[0]}
                </div>
            );
        } else {
            return (
                <div className={theme['fixedBottomSheet--header']}>
                    {children[0]}
                </div>
            );
        }
    }
    render (){
        const {children} = this.props;
        return (
            <div className={theme['fixedBottomSheet']}>
                <div className={theme['fixedBottomSheet--header']}>
                    {children[0]}
                </div>
                {this.state.expanded && children[1]}
                <CardTitleButtons buttons={[{icon: (this.state.expanded ? ICON_EXPAND : ICON_LESS ), onClick: ()=>this.setState({expanded: !this.state.expanded})}]}/>
               {/* <div className={theme['fixedBottomSheet--expandButton']}>
                    <Button icon={ICON_EXPAND} floating onClick={()=>this.setState({expanded: !this.state.expanded})}/>
                </div>*/}
            </div>
        );
    }
}

FixedBottomSheet.propTypes = {
    children: PropTypes.any
};

export {FixedBottomSheet};
