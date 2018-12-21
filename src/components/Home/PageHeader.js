import React from 'react';

const PageHeader = props => {
    return (
        <section className='page-hero-text-box'>
            <h1 className='page-header-title'>
                {props.info}
            </h1>
        </section>
    );
};

export default PageHeader;