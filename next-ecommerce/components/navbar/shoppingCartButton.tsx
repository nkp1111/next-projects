import { ShoppingCart } from '@/lib/db/cart'
import { FiShoppingCart } from 'react-icons/fi'

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <div className='dropdown dropdown-end'>
      <label htmlFor="" className='btn btn-ghost btn-circle'>
        <div className="indicator">
          <FiShoppingCart className="text-xl" />
          <span className='badge badge-sm indicator-item'>{cart?.size || 0}</span>
        </div>
      </label>
    </div>
  )
}
