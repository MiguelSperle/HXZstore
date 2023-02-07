import { createServer } from 'miragejs';

createServer({
    routes(){
        this.namespace = 'api' // sempre que usar a API, devo colocar esse api na frente
        
        this.get('/products', () => {
           return {
              products: [
                {
                  id: 1,
                  slug: 'cobault',
                  title: 'Cobault',
                  slogan: 'The best config',
                  category: "computer",
                  img: '/img/pc1.png',
                  price: 1300,
                  stars: 5,
                  desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
                  illo facere deserunt delectus maxime sit aliquam nihil a architecto
                  veritatis saepe repellat quae ut perferendis tempore quisquam
                  tenetur nemo illum?`,
                  discount: 20,
                  thead: ['Processor', 'Operating System', 'Memory', 'Storage', 'Graphics', 'Power Supply'],
                  specifications: ['Intel Core i7','Windows 10','16GB RAM','1TB de armazenamento', 'GTX 1660', 'Fonte 500W'],
                 
                },


                {
                  id: 2,
                  slug: 'carbon',
                  title: 'Carbon',
                  slogan: 'The best config',
                  category: "computer",
                  img: '/img/pc2.png',
                  price: 1899,
                  stars: 4,
                  desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
                  illo facere deserunt delectus maxime sit aliquam nihil a architecto
                  veritatis saepe repellat quae ut perferendis tempore quisquam
                  tenetur nemo illum?`,
                  discount: 40,
                  thead: ['Processor', 'Operating System', 'Memory', 'Storage', 'Graphics', 'Power Supply'],
                  specifications: ['Intel Core i9','Windows 10','32GB RAM','1TB de armazenamento', 'GTX 2060', 'Fonte 750W'],
                 
                },

                {
                  id: 3,
                  slug: 'kronos',
                  title: 'Kronos',
                  slogan: 'The best config',
                  category: "computer",
                  img: '/img/pc3.png',
                  price: 1899,
                  stars: 4,
                  desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
                  illo facere deserunt delectus maxime sit aliquam nihil a architecto
                  veritatis saepe repellat quae ut perferendis tempore quisquam
                  tenetur nemo illum?`,
                  discount: 40,
                  thead: ['Processor', 'Operating System', 'Memory', 'Storage', 'Graphics', 'Power Supply'],
                  specifications: ['Intel Core i5','Windows 10','8GB RAM','1TB de armazenamento', 'GTX 1650', 'Fonte 500W'],
         
                },

                {
                  id: 4,
                  slug: 'hero',
                  title: 'Hero',
                  slogan: 'The best mouse',
                  category: "peripherals",
                  img: '/img/mouse.png',
                  price: 134,
                  stars: 5,
                  desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
                  illo facere deserunt delectus maxime sit aliquam nihil a architecto
                  veritatis saepe repellat quae ut perferendis tempore quisquam
                  tenetur nemo illum?`,
                  discount: 40,
                  thead: ['Buttons', 'Dpi', 'Color', 'Weight'],
                  specifications: ['7 Botões', '20000 de DPI','Black','Peso de 0.5kg']
                },

                {
                  id: 5,
                  slug: 'eagle',
                  title: 'Eagle',
                  slogan: 'The best headset',
                  category: "peripherals",
                  img: '/img/phone1.png',
                  price: 199,
                  stars: 5,
                  desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
                  illo facere deserunt delectus maxime sit aliquam nihil a architecto
                  veritatis saepe repellat quae ut perferendis tempore quisquam
                  tenetur nemo illum?`,
                  discount: 40,
                  thead: ['Frequency Response', 'Impendace', 'Sensitivy', 'Driver Size'],
                  specifications: [ 'Frequencia de 20Hz - 20kHz','Volume geral de 26(1 kHz)','Sensibilidade de 96dB','Driver de 50mm'],
                  
                },

                {
                  id: 6,
                  slug: 'howk',
                  title: 'Howk',
                  slogan: 'The best headset',
                  category: "peripherals",
                  img: '/img/phone2.png',
                  price: 199,
                  stars: 5,
                  desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
                  illo facere deserunt delectus maxime sit aliquam nihil a architecto
                  veritatis saepe repellat quae ut perferendis tempore quisquam
                  tenetur nemo illum?`,
                  discount: 40,
                  thead: ['Frequency Response', 'Impendace', 'Sensitivy', 'Driver Size'],
                  specifications: ['Frequência de 20Hz - 20kHz','Volume geral de 32(1 kHz)','Sensibilidade 120dB','Driver 50mm']
                }
              ]
           }
        })
    }
})