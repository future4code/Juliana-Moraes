import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
`

export class IconeComContador extends React.Component {

	render(){
		return (
			<IconContainer>
			<IconImage alt={'Icone'} src={this.props.icone} onClick={this.props.onClickIcone}/>
			<p>{this.props.valorContador}</p>
			</IconContainer>
		)
	}
}

