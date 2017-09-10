// Component taken from https://codepen.io/vkbansal/pen/jrWgwg

import React, { Component } from "react";
import "./style.scss";

class SelectInput extends Component {

    constructor(props) {

        super(props)

        this.state = {
            active: false,
        }

    }

    handleClick = (e) => {

        this.setState({values: e.currentTarget.innerText, active: false})

        if (typeof this.props.onChange !== 'undefined') {

            this.props.onChange(e.currentTarget.dataset.value, this.props.id)

        }

    };

    toggleActive = () => {

        this.setState({active: ! this.state.active})

    };

    render() {

        return (

            <div className={'select' + (this.state.active ? ' select-active' : ' select-deactive') + (typeof this.props.value !== 'undefined' && this.props.value.length ? ' selected' : '')}>

								<div className="select__label">

									<p>{this.props.label}</p>

								</div>

                <div className='select__value' onClick={this.toggleActive}>

                    <p>{this.props.value}</p>

                </div>

                <div className='select__options'>

                    {
                      this.props.options.map((option) => {

                        if (!option) {
                          return null;
                        }

                        let type = option.constructor === String ? 'String' : option.constructor === Object ? 'Object' : false

                        option = type == 'String' ? {[option]: option} : option

                        return type ? <div className={'select__option' + (this.props.value == option[Object.keys(option)[0]] ? ' select__option-active' : '')} onClick={this.handleClick} data-value={option[Object.keys(option)[0]]} key={option[Object.keys(option)[0]]}>{Object.keys(option)[0]}</div> : ''

                      })
                    }

                </div>

								<div className='select__trigger' onClick={this.toggleActive}>

								</div>

            </div>

        )

    }

}

export default SelectInput
