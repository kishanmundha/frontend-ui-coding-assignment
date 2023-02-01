import React from 'react';

export interface ContactUsProps {}

export const ContactUsSection: React.FC<ContactUsProps> = () => {
  return (
    <section
      id="contact"
      className="container-md flex flex-col items-center justify-center mt-40"
    >
      <h3 className="text-2xl font-medium text-center">Contact</h3>
      <div className="w-full md:px-32">
        <form>
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex flex-1 gap-4">
              <div className="flex flex-col text-gray-500 flex-1">
                <label htmlFor="姓">姓 </label>
                <input
                  type="text"
                  id="姓"
                  placeholder="例）太郎"
                  className="border border-gray-300 rounded py-2 px-1 mt-2 placeholder:text-gray-300"
                />
              </div>
              <div className="flex flex-col text-gray-500 flex-1">
                <label htmlFor="姓">姓 </label>
                <input
                  type="text"
                  id="姓"
                  placeholder="例）太郎"
                  className="border border-gray-300 rounded py-2 px-1 mt-2 placeholder:text-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-col text-gray-500">
              <label htmlFor="メールアドレス">メールアドレス </label>
              <input
                type="email"
                id="メールアドレス"
                placeholder="例）yamada@email.com"
                className="border border-gray-300 rounded py-2 px-1 mt-2 placeholder:text-gray-300"
              />
            </div>
            <div className="flex flex-col text-gray-500">
              <label htmlFor="お問合せ内容">お問合せ内容</label>

              <textarea
                id="お問合せ内容"
                rows={6}
                className="border border-gray-300 rounded py-2 px-1 mt-2 placeholder:text-gray-300"
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-primary text-white px-8 py-2 rounded-md">
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
