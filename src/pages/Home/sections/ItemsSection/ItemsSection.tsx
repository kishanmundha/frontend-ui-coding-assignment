import ArrowLeft from '@app/components/icons/ArrowLeft';
import ArrowRight from '@app/components/icons/ArrowRight';
import { data } from '@app/data/data';
import { ItemCard } from './ItemCard';

export const ItemsSection = () => {
  return (
    <section id="items" className="container-md flex flex-col mt-40">
      <h3 className="text-2xl font-medium text-center">Items</h3>
      <div className="flex items-center gap-8">
        <button className="text-gray-400 cursor-pointer">
          <ArrowLeft style={{ width: 48, height: 48 }} />
        </button>
        <div className="flex gap-6 mt-8">
          {data.items.map(item => {
            return <ItemCard key={item.id} item={item} />;
          })}
        </div>
        <button className="text-gray-400 cursor-pointer">
          <ArrowRight style={{ width: 48, height: 48 }} />
        </button>
      </div>
      <div className="flex gap-1 mt-8 self-center">
        <div className="w-2 h-2 rounded-full bg-gray-400" />
        <div className="w-2 h-2 rounded-full border border-gray-300 bg-gray-300" />
        <div className="w-2 h-2 rounded-full border border-gray-300 bg-gray-300" />
      </div>
      <a className="mt-6 self-center hover:underline" href="/#">
        View more →
      </a>
    </section>
  );
};
