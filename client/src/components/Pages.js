import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {hero} = useContext(Context)
    const pageCount = Math.ceil(hero.totalCount / hero.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={hero.page === page}
                    onClick={() => hero.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;
