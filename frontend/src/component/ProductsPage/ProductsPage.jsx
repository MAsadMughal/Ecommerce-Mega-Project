import React, { useEffect, useState } from 'react'
import Product from "../Home/Product";
import MetaData from '../layout/MetaData';
import { CgMouse, CgWindows } from "react-icons/cg"
import Pagination, { bootstrap5PaginationPreset } from "react-responsive-pagination";
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, getProduct } from '../../actions/productActions';
import FilterBox from '../Filters/FilterBox.jsx';
import { ReactNotifications } from 'react-notifications-component'
import Notification from '../Notification/Notification';
import Search from "../Search/SearchComponent";


const ProductsPage = ({ data }) => {
    const dispatch = useDispatch();
    const { product, error, pageNo, queries, loading } = data;
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        setCurrentPage(pageNo);
        if (error) {
            setTimeout(() => {
                Notification("Error", error, "error");
            }, 10);
            clearErrors();
        }
    }, [])





    // Filter Box States
    let [min, setmin] = useState(queries && queries.price.gte);
    let [keyword, setkeyword] = useState(queries && queries.keyword);
    let [max, setmax] = useState(queries && queries.price.lte);
    let [ratingAbove, setRatingsAbove] = useState(queries && queries.ratings.gte);
    let [category, setCategory] = useState(queries && queries.category);

    //Pagination
    function handlePageChange(page) {
        setCurrentPage(page);
        dispatch(getProduct(page, min, max, ratingAbove, category, keyword));
        if (product.length >= 1) {
            window.scrollTo({ top: 675, behavior: 'smooth' })
        }
        else {
            window.scrollTo({ top: 200, behavior: 'smooth' })
        }
        console.log(product && (Math.ceil(parseFloat(product.length / 3))))
    }

    //applyFilterAndSearch
    function applyFilterAndSearch() {
        dispatch(getProduct(currentPage, min, max, ratingAbove, category, keyword));
    }


    return (

        <>

            <MetaData title="Ecommerce Red Store" />
            {error && <ReactNotifications />}
            <div className="banner">
                <p>
                    Welcome to Ecommerce Red Store
                </p>
                <h1>
                    FIND AMAZING {product ? product.length : null} PRODUCTS BELOW
                </h1>
                <a href="#container">
                    <button  >scroll <CgMouse /></button>
                </a>
            </div>
            <h2 className="homeHeading">Featured Products</h2>
            <div id="rowflex">

                <center>
                <Search/>
                    <FilterBox applyFilterAndSearch={applyFilterAndSearch} min={min} max={max} setmin={setmin} setmax={setmax} setRatingsAbove={setRatingsAbove} ratingAbove={ratingAbove} category={category} setCategory={setCategory} />
                </center>
                {(product && product.length >= 1) ? <>
                    <div className="container" id="container">
                        {product && product.map((item, key) => { return <Product product={item} key={item._id} /> })}
                    </div>
                </> : null}
            </div>
            <Pagination
                {...bootstrap5PaginationPreset}
                previousLabel="Prev"
                nextLabel="Next"
                current={currentPage}
                total={3}
                onPageChange={page => handlePageChange(page)}
            />
        </>)
}

export default ProductsPage