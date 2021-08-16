import React from 'react'
import CategoryCard from '../components/CategoryCard'

class CategoryContainer extends React.Component{
    renderCategoryCards = (categories) =>{
       let cards = categories.map(category =>{
           return <CategoryCard key={category.id} category={category}/>
       })
       cards.length = 4
       return cards
    }
  render(){   
     return (
        <div id="container1">
            <div id="category-container">
                  {this.props.categories ? this.renderCategoryCards(this.props.categories) : null}
            </div>
        </div>
     )
  }
}
export default CategoryContainer