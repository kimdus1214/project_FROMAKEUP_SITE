const continents = [
    {
        "_id" : 1,
        "name" : "클렌징" 
    },
    {
        "_id" : 2,
        "name" : "스킨케어" 
    },
    {
        "_id" : 3,
        "name" : "눈가케어" 
    },
    {
        "_id" : 4,
        "name" : "집중케어" 
    },
    {
        "_id" : 5,
        "name" : "헤어/바디" 
    },
    {
        "_id" : 6,
        "name" : "메이크업" 
    },
    {
        "_id" : 7,
        "name" : "마스크팩" 
    }
]

const price = [
    {
        "_id" : 0,
        "name" : "전체",
        "array" : []
    },
    {
        "_id" : 1,
        "name" : "0~1만원대",
        "array" : [0, 19900]
    },
    {
        "_id" : 2,
        "name" : "2만원대",
        "array" : [20000, 29900]
    },
    {
        "_id" : 3,
        "name" : "3만원대",
        "array" : [30000, 39900]
    },
    {
        "_id" : 4,
        "name" : "4만원대",
        "array" : [40000, 49900]
    },
    {
        "_id" : 5,
        "name" : "5만원대",
        "array" : [50000, 59900]
    }
]

export {
    continents,
    price
}