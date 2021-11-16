import React, {useState, useEffect} from 'react'
import styled, {css} from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

const HomeSlider = ({data}) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [canSlide, setCanSlide] = useState(true);
    const {homeSliderImages} = data;
    const clickHandler = (e, action = "sub") => {
        if (canSlide) {
            setCanSlide(false);
            if (action === "sub") setActiveSlide(activeSlide - 1);
            else setActiveSlide(activeSlide + 1);
        }
    }
    useEffect(() => {
        if (activeSlide < 0) {
            setActiveSlide(homeSliderImages.edges.length - 1);
        } else if (activeSlide > homeSliderImages.edges.length - 1) {
            setActiveSlide(0);
        }
    }, [activeSlide, homeSliderImages.edges.length]);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(activeSlide + 1);
        }, 6000);
        const timeout = setTimeout(() => {
            setCanSlide(true);
        }, 1000)
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        }
    }, [activeSlide])
    return (
        <>
            <Carousel>
                    {homeSliderImages.edges.map(({node}, idx) => (
                        <StyledDiv activeslide={activeSlide} idx={idx} key={idx} >
                            <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} />
                        </StyledDiv>
                    ))}
                <LeftArrow onClick={clickHandler} />
                <RightArrow onClick={(e) => clickHandler(e, "add")} />
            </Carousel>
        </>
    )
}

export default HomeSlider

const Carousel = styled.div`
    max-width: 1920px;
    display: grid;
    margin: 94px auto 0;
    position: relative;
    @media screen and (max-width: 951px) {
        margin: 83px auto 0;
    }
    @media screen and (max-width: 415px) {
        margin: 75px auto 0;
    }
    @media screen and (max-width: 342px) {
        margin: 73px auto 0;
    }
`
const StyledDiv = styled.div`
    grid-area: 1/1;
    opacity: 0;
    ${({activeslide, idx}) => activeslide === idx && css`
        opacity: 1;
    ` };
    transition: opacity 1s;
`
const LeftArrow = styled(BsChevronLeft)`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #e9e9e9;
    font-size: 54px;
    cursor: pointer;
    opacity: .6;
    transition: .3s;
    :hover {
        opacity: 1;
    }
    @media screen and (max-width: 768px) {
        font-size: 34px;
    }
`
const RightArrow = styled(BsChevronRight)`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #e9e9e9;
    font-size: 54px;
    cursor: pointer;
    opacity: .6;
    transition: .3s;
    :hover {
        opacity: 1;
    }
    @media screen and (max-width: 768px) {
        font-size: 34px;
    }
`