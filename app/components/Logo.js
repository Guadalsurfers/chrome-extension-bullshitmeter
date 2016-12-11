import React from 'react';
import styled from 'styled-components';


const LogoContainer = styled.div` 
`;

const StyledLogo = styled.svg`
  width: 100px;
`;

const LogoTextContainer = styled.div`
	display: inline-block;
	height: 100%;
	font-size: 30px;
	margin: 0.02em;
	vertical-align: middle;
`;

const SvgLogo = () => (
	<StyledLogo x="0px" y="0px" viewBox="0 0 612 792" enable-background="new 0 0 612 792">
		<path fill="#6F6F6D" d="M585.576,185.144c-54.506-1.913-98.494,6.694-125.269,25.819c-16.257,28.688-24.862,77.456-23.906,137.7
			c54.506,1.912,102.318-0.956,125.269-25.819C583.664,298.938,586.532,245.388,585.576,185.144"/>
		<path fill="#F4A19A" d="M571.232,221.481c-38.25-0.956-68.85,4.781-87.975,18.169c-11.476,20.081-18.169,54.506-17.213,96.581
			c38.25,0.956,71.719-0.956,87.975-18.169C570.276,300.851,572.188,263.557,571.232,221.481"/>
		<path fill="#6F6F6D" d="M11.826,185.144c54.506-1.913,98.494,6.694,125.269,25.819c16.256,28.688,24.863,77.456,23.906,137.7
			c-53.55,1.912-102.318-0.956-125.269-25.819C13.739,298.938,10.87,245.388,11.826,185.144"/>
		<path fill="#F4A19A" d="M26.17,221.481c38.25-0.956,68.85,4.781,87.975,18.169c11.475,20.081,17.212,54.506,17.212,96.581
			c-38.25,0.956-71.719-0.956-87.975-18.169C27.126,300.851,25.214,263.557,26.17,221.481"/>
		<path fill="#89664C" d="M307.912,442.856c-163.519,0-288.787-67.894-288.787,84.149c0,122.4,161.606,155.869,284.962,155.869
			c143.438,0,288.788-33.469,288.788-155.869C592.875,374.962,476.213,442.856,307.912,442.856"/>
		<path fill="#9B7861" d="M303.131,289.856c-91.8,0-234.281,10.519-234.281,120.487c0,160.65,473.343,160.65,473.343,0
			C543.15,300.375,400.669,289.856,303.131,289.856"/>
		<path fill="#A88673" d="M468.562,249.694c-43.987-98.494-252.45,2.869-216.112-116.663c5.737-18.169,4.781-25.819-8.606-22.95
			c-74.587,15.3-129.094,91.8-109.969,155.869C195.075,470.588,528.807,383.569,468.562,249.694"/>
		<path fill="#FFFFFF" d="M275.4,417.994c0,38.25-30.6,68.85-68.85,68.85s-68.85-30.6-68.85-68.85c0-38.25,30.6-68.851,68.85-68.851
			S275.4,379.744,275.4,417.994"/>
		<circle fill="#231F20" cx="225.675" cy="417.994" r="34.425"/>
		<path fill="#FFFFFF" d="M474.3,417.994c0,38.25-30.6,68.85-68.85,68.85s-68.851-30.6-68.851-68.85
			c0-38.25,30.601-68.851,68.851-68.851C442.744,349.144,474.3,379.744,474.3,417.994"/>
		<g>
			<circle fill="#231F20" cx="386.325" cy="417.994" r="34.425"/>
			<path fill="#231F20" d="M363.375,573.862c0,31.557-25.818,57.375-57.375,57.375c-31.556,0-57.375-25.818-57.375-57.375
				c0-31.556,25.819-57.375,57.375-57.375C337.557,516.487,363.375,542.307,363.375,573.862"/>
		</g>
		<g>
			<path fill="#F6C799" d="M205.116,246.334c-34.425-18.169-57.375-56.419-57.375-56.419
				c-9.562,100.406,26.775,125.269,47.812,125.269C223.284,316.14,245.278,268.327,205.116,246.334"/>
			<path fill="#F6C799" d="M406.885,246.334c34.426-18.169,57.375-56.419,57.375-56.419c9.562,100.406-26.775,125.269-47.812,125.269
				C388.717,316.14,366.723,268.327,406.885,246.334"/>
		</g>
</StyledLogo>);

export default () => (<LogoContainer>
	<LogoTextContainer></LogoTextContainer>
	<SvgLogo />
	<LogoTextContainer></LogoTextContainer>
</LogoContainer>);