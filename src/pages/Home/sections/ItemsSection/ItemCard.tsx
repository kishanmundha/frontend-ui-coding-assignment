import { ProductItem } from '@app/data/data';
import { formatCurrency } from '@app/utils/common';
import React from 'react';

export interface ItemCardProps {
  item: ProductItem;
}

export const ItemCard: React.FC<ItemCardProps> = props => {
  const { image, title, amount, colors } = props.item;
  return (
    <div>
      <img src={image} alt="" className="aspect-square object-cover" />
      <div className="flex gap-1 mt-2">
        {colors.map(color => (
          <div
            key={color}
            className="w-3 h-3 rounded-full border border-gray-300 "
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="mt-2 text-gray-500">{title}</div>
      <div className=" text-right text-gray-600">
        {formatCurrency(amount, 0)}
      </div>
    </div>
  );
};
