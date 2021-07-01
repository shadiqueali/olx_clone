import React from 'react'
import Arrow from '../../assets/Arrow'
import './Banner.css'

function Banner() {
    return (
        <div className="bannerParentDiv">
            <div className="bannerChildDiv">
                <div className="menuBar">
                    <div className="categoryMenu">
                        <span>ALL CATEGORIES</span>
                        <Arrow></Arrow>
                    </div>
                    <div className="otherQuickOPtions">
                        <span>Cars</span>
                        <span>Motorcy...</span>
                        <span>Mobile Ph...</span>
                        <span>For Sale:House & Apart...  </span>
                        <span>Scoot</span>
                        <span>Commercial & Other Ve...</span>
                        <span>For Rent:House & Apart...</span>
                    </div>
                </div>
                <div className="banner">
                    <img src="../../../Images/banner copy.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Banner
