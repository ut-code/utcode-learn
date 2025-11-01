import { useState } from "react";

type Product = { id: number; name: string; price: number; stock: number };
type CartItem = { productId: number; quantity: number };

const initialProducts: Product[] = [
  { id: 1, name: "りんご", price: 100, stock: 10 },
  { id: 2, name: "バナナ", price: 150, stock: 5 },
  { id: 3, name: "オレンジ", price: 120, stock: 8 },
];

export default function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product || product.stock === 0) return;

    const existingItem = cart.find((item) => item.productId === productId);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { productId, quantity: 1 }]);
    }

    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, stock: p.stock - 1 } : p,
      ),
    );
  };

  const removeFromCart = (productId: number) => {
    const cartItem = cart.find((item) => item.productId === productId);
    if (!cartItem) return;

    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, stock: p.stock + cartItem.quantity } : p,
      ),
    );
    setCart(cart.filter((item) => item.productId !== productId));
  };

  const increaseQuantity = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product || product.stock === 0) return;

    setCart(
      cart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, stock: p.stock - 1 } : p,
      ),
    );
  };

  const decreaseQuantity = (productId: number) => {
    const cartItem = cart.find((item) => item.productId === productId);
    if (!cartItem) return;

    if (cartItem.quantity === 1) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
      setProducts(
        products.map((p) =>
          p.id === productId ? { ...p, stock: p.stock + 1 } : p,
        ),
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  return (
    <div>
      <h2>商品リスト</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ¥{product.price} (在庫: {product.stock})
            <button
              type="button"
              onClick={() => addToCart(product.id)}
              disabled={product.stock === 0}
            >
              カートに追加
            </button>
          </li>
        ))}
      </ul>

      <h2>ショッピングカート</h2>
      {cart.length === 0 ? (
        <p>カートは空です</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              return (
                <li key={item.productId}>
                  {product?.name} - ¥{product?.price} × {item.quantity} = ¥
                  {product ? product.price * item.quantity : 0}
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.productId)}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.productId)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.productId)}
                  >
                    削除
                  </button>
                </li>
              );
            })}
          </ul>
          <p>
            <strong>合計: ¥{getTotalPrice()}</strong>
          </p>
        </>
      )}
    </div>
  );
}
