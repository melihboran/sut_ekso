import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from "../styles/slider.module.css"
import Link from 'next/link'

export  default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
            <div>
                  <div className={styles.bykdiv}>
                    <img src="/images/pc1.jpeg" height={300} width={175}/>
                    <Link href="kurumsal/haberlerveduyurular">
                    <p className="legend">EKSO Çalışmaları Hızlandırdı</p>
                    </Link>
                  </div>
            </div>

            <div>
                <div className={styles.bykdiv}>
                    <img src="/images/pc2.jpeg" height={300} width={175}/>
                    <Link href="kurumsal/haberlerveduyurular">
                    <p className="legend">EKSO Ürün Portföyüne Yeni Bir Ürün Daha Ekledi</p>
                    </Link>
                </div>
            </div>

            <div>           
                <div className={styles.bykdiv}>
                    <img src="images/pc3.jpeg" height={300} width={175}/>
                    <Link href="kurumsal/haberlerveduyurular">
                    <p className="legend">EKSO’dan 5 Milyon TL’lik Yatırım</p>
                    </Link>
                </div>
            </div>    
            </Carousel>
        );
    }
};



