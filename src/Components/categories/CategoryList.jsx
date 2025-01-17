import React, { Component } from "react";
import CategoryCard from "./Category";
import { Row, Col } from "react-bootstrap";

class CategoryList extends Component {
  render() {
    const categories = [
      {
        title: "Houses",
        offers: "6.4K",
        link: "listings-real-estate.html",
        icon: "fi-bookmark fs-base",
      },
      {
        title: "Apartments",
        offers: "12.8K",
        link: "listings-real-estate.html",
        icon: "fi-bookmark fs-base",
      },
      {
        title: "Commercial",
        offers: "9.3K",
        link: "listings-real-estate.html",
        icon: "fi-bookmark fs-base",
      },
      {
        title: "Daily rental",
        offers: "42.4K",
        link: "listings-real-estate.html",
        icon: "fi-bookmark fs-base",
      },
      {
        title: "New buildings",
        offers: "22.5K",
        link: "listings-real-estate.html",
        icon: "fi-bookmark fs-base",
      },
      {
        title: "More",
        offers: "",
        link: "#",
        icon: "fi-chevron-down fs-xl",
        isDropdown: true,
        dropdownItems: [
          "Offices",
          "Warehouses",
          "Retail spaces",
          "Townhouses",
          "Vacation homes",
        ],
      },
    ];

    return (
      <section className="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 my-xxl-3">
        <div className="py-5">
          <div className="rounded py-3 py-xl-4 px-2 border rounded-2">
            <Row className="row-cols-2 row-cols-lg-3 row-cols-xl-6 justify-content-center g-0 py-2 text-center row-gap-2 gap-xl-0">
              {categories.map((category, index) => (
                <Col key={index}>
                  <CategoryCard
                    title={category.title}
                    offers={category.offers}
                    link={category.link}
                    icon={category.icon}
                    isDropdown={category.isDropdown}
                    dropdownItems={category.dropdownItems}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryList;
