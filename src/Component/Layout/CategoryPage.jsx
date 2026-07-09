import React, { Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import Category from '../Category/Category';

const CategoryPage = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div>
                <Suspense fallback={<span>loading...</span>}>
                <Category />
                </Suspense>
            </div>
        </div>
    );
};

export default CategoryPage;