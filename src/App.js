import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
              { id: 1,
                title: 'Кожаная куртка Rick Owens',
                img: 'rick-owens-geobasket-jacket.jpg',
                desc: 'Асимметричная кожаная куртка с удлинёнными рукавами и фирменной архитектурной посадкой.',
                category: 'jackets',
                price: '2899.99'
              },
              { id: 2,
                title: 'Платье Maison Margiela',
                img: 'maison-margiela-deconstructed-dress.jpg',
                desc: 'Деконструированное платье с открытыми швами и контрастной текстурой тканей.',
                category: 'dresses',
                price: '1799.99'
              },
              { id: 3,
                title: 'Ботинки Balenciaga 3XL Ski',
                img: 'balenciaga-cropped-boots.webp',
                desc: 'Грубые ботинки с массивной подошвой и укороченным верхом в индустриальном стиле.',
                category: 'shoes',
                price: '1499.99'
              },
              { id: 4,
                title: 'Брюки Yohji Yamamoto',
                img: 'yohji-yamamoto-wide-pants.jpeg',
                desc: 'Свободные брюки с драпировкой из плотной шерсти, выполненные в стиле японского минимализма.',
                category: 'pants',
                price: '1199.99'
              },
              { id: 5,
                title: 'Пальто Ann Demeulemeester',
                img: 'ann-demeulemeester-velvet-coat.jpg',
                desc: 'Длинное бархатное пальто с ручной отделкой.',
                category: 'coats',
                price: '2399.99'
              },
              { id: 6,
                title: 'Кроссовки Rick Owens DRKSHDW Ramones',
                img: 'rick-owens-ramones.jpeg',
                desc: 'Знаковая модель на толстой подошве с удлинённым носом и кожаным корпусом.',
                category: 'shoes',
                price: '1099.99'
              },
              { id: 7,
                title: 'Свитер Comme des Garçons Layered',
                img: 'cdg-obscure-sweatshirt.jpeg',
                desc: 'Многослойный свитер из хлопка с разрезами и нестандартным кроем.',
                category: 'sweatshirts',
                price: '899.99'
              },
              { id: 8,
                title: 'Платье Pleats Please Issey Miyake',
                img: 'issey-miyake-pleats-future.webp',
                desc: 'Платье с инновационными плиссировками и текстильной геометрией из будущего.',
                category: 'dresses',
                price: '699.99'
              },
              { id: 9,
                title: 'Жилет Boris Bidjan Saberi',
                img: 'boris-bidjan-saberi-vest.webp',
                desc: 'Технический жилет с множеством молний и прорезей в духе урбанистического киберпанка.',
                category: 'vests',
                price: '1999.99'
              },
              { id: 10,
                title: 'Куртка Balmain Sculpted Leather',
                img: 'balmain-sculpted-jacket.jpg',
                desc: 'Кожаная куртка с подчёркнутой геометрией плеч и металлическими элементами.',
                category: 'jackets',
                price: '2699.99'
              },
              { id: 11,
                title: 'Брюки Julius Industrial Wrap',
                img: 'julius-industrial-pants.webp',
                desc: 'Трансформируемые брюки с завязками и многослойной конструкцией из технической ткани.',
                category: 'pants',
                price: '1299.99'
              },
              { id: 12,
                title: 'Пальто The Row',
                img: 'the-row-minimal-coat.jpg',
                desc: 'Чистая, лаконичная форма пальто из кашемира премиального качества.',
                category: 'coats',
                price: '1099.99'
              },
              { id: 13,
                title: 'Сумка 5AC Classique mini',
                img: 'maison-margiela-5ac-distorted.jpg',
                desc: 'Знаковая сумка с “вывернутым” дизайном и видимой подкладкой.',
                category: 'bags',
                price: '1899.99'
              },
              { id: 14,
                title: 'Сапоги Rick Owens Kiss',
                img: 'rick-owens-kiss-platform-boots.jpg',
                desc: 'Высокие сапоги на платформе с фирменной футуристичной формой и кожаным блеском.',
                category: 'shoes',
                price: '2299.99'
              },
              { id: 15,
                title: 'Толстовка Vetements Oversized Graffiti',
                img: 'vetements-oversized-graffiti.webp',
                desc: 'Оверсайз-худи с граффити-принтами и грубой текстурой ткани.',
                category: 'sweatshirts',
                price: '799.99'
              },
              {
                id: 16,
                title: 'Куртка Rick Owens Gimp Down',
                img: 'rick-owens-puhovik.jpg',
                desc: 'Теплая куртка высокой моды.',
                category: 'jackets',
                price: '1799.99'
              }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
        <div сlassName='wrapper'>
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories chooseCategory = {this.chooseCategory}/>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
          <Footer />
        </div>
      );
  }

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({ showFullItem: !this.state.showFullItem })
}

chooseCategory(category) {
  if (category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }

  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
