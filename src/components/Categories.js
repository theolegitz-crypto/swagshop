import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state={
            categories:[
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'jackets',
                    name: 'Куртки'
                },
                {
                    key: 'shoes',
                    name: 'Обувь'
                },
                {
                    key: 'coats',
                    name: 'Пальто'
                },
                 {
                    key: 'sweatshirts',
                    name: 'Свитшоты'
                },
                {
                    key: 'vests',
                    name: 'Жилеты'
                },
                {
                    key: 'bags',
                    name: 'Сумки'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories