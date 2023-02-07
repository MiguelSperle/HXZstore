// contextAPI
import React, { useState } from 'react';
import useLocalStorage from "use-local-storage"; // lib de local storage( salvar no navegador quando algo é adicionado)
export const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  
  const [products, setProducts] = useLocalStorage("products", "");

function addCart({
      id,
      name,
      price,
      image,
      amountBuy
    }){
      const verificationExists = products.find( (product) => product.id === id)
      if(verificationExists){
        return alert('item adicionado já no seu carrinho.')
      }
      setProducts([...products ,{ id, name, price, image, amountBuy}])
    }

function addAmountItem({
      id,
    }){
      const itemExists = products.find((item) => item.id === id)
      const newItem = {
        ...itemExists,
        amountBuy: itemExists.amountBuy + 1,   
    }

    setProducts(products.map((item) => {
      if(item.id === id) {
          return newItem
          
      } else {
        return {
          ...item
        }
      }
      
     }))
      
    }

function removeAmountItem({
      id
    }){
      const itemExists = products.find((item) => item.id === id)
      const newItem = {
        ...itemExists,
        amountBuy: itemExists.amountBuy - 1,   
      }

      if(itemExists.amountBuy <= 1){
        return itemExists.amountBuy + 1
      }

      setProducts(products.map((item) => {
        if(item.id === id) {
            return newItem
            
        } else {
          return {
            ...item
          }
        }
        
       }))
      
    }


function RemoveProductsCart(idProduct){
      const Restantes = products.filter( (product) => product.id !== idProduct) 

      if(RemoveProductsCart){
        setProducts(Restantes)
      }                                    
    }
  


  return (
    <ProductsContext.Provider value={{ addCart, products, setProducts, RemoveProductsCart, addAmountItem, removeAmountItem }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => React.useContext(ProductsContext);