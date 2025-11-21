import Button from "../Button";
import { Search, X, CornerDownRight } from "lucide-react";
import { useCustomNavigate } from "../../hooks/useNavigate";
import { menuItem, menuNavItem, newsItem } from "../../lib/data/menu-item";
import { Link } from "react-router-dom";
import AnimatedButton from "../AnimatedButton";
import { FooterList } from "../../Layout/Footer";
import FadeUp from "../animations/FadeUp";

function Menu() {
  const { goTo } = useCustomNavigate();

  return (
    <div className="bg-[#1E2124] text-white h-screen p-3 overflow-y-auto">
      {/* Top Header */}
      <FadeUp delay={0.1}>
        <div className="w-[95%] fixed left-1/2 -translate-x-1/2 flex justify-between items-center">
          <svg
            className="fill-white"
            width="83"
            height="20"
            viewBox="0 0 83 20"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <title>Palantir</title>
            <path d="M20.115 2.092h5.112c1.896 0 3.133.084 4.204 1.255.742.837 1.154 1.841 1.154 3.013 0 1.171-.412 2.176-1.236 3.012-.825.837-1.896 1.34-4.617 1.34H22.26v6.945h-2.144V2.092zm2.144 6.862h2.473c1.402 0 3.545-.084 3.545-2.678 0-2.427-1.979-2.427-3.133-2.427H22.26v5.105zm15.169 8.703c-.165-.502-.165-1.088-.165-1.59-.99 1.757-2.39 1.925-3.298 1.925-2.473 0-3.792-1.423-3.792-3.18 0-.837.33-2.26 1.896-3.18 1.154-.67 2.803-.67 3.71-.67.495 0 .824 0 1.402.084 0-1.339 0-1.925-.413-2.427-.412-.502-1.236-.67-1.813-.67-1.979 0-2.144 1.424-2.144 1.842h-1.978c.082-.586.165-1.339.742-2.008.824-.92 2.308-1.172 3.462-1.172 1.566 0 3.215.502 3.792 1.59.33.67.33 1.172.33 1.674l-.082 5.188c0 .167 0 1.59.165 2.678h-1.814v-.084zM36.026 12.3c-.824 0-3.874 0-3.874 2.176 0 .67.412 1.841 2.226 1.841.989 0 1.813-.418 2.308-1.172.412-.753.495-1.338.495-2.845-.33.084-.66 0-1.155 0zM40.89 2.092h1.979v15.565H40.89V2.092zm10.553 15.565c-.165-.502-.165-1.088-.165-1.59-.99 1.757-2.39 1.925-3.298 1.925-2.473 0-3.792-1.423-3.792-3.18 0-.837.33-2.26 1.896-3.18 1.154-.67 2.803-.67 3.71-.67.495 0 .824 0 1.402.084 0-1.339 0-1.925-.413-2.427-.412-.502-1.236-.67-1.813-.67-1.979 0-2.144 1.424-2.144 1.842h-1.978c.082-.586.164-1.339.742-2.008.824-.92 2.308-1.172 3.462-1.172 1.566 0 3.215.502 3.792 1.59.33.67.33 1.172.33 1.674l-.082 5.188c0 .167 0 1.59.165 2.678h-1.814v-.084zm-1.32-5.356c-.824 0-3.874 0-3.874 2.176 0 .67.412 1.841 2.226 1.841.99 0 1.814-.418 2.308-1.172.413-.753.495-1.338.495-2.845-.412.084-.66 0-1.154 0zm4.865-4.184V6.862h1.978v1.757c.248-.418.99-1.924 3.38-1.924.99 0 3.875.334 3.875 3.682v7.364H62.16v-6.862c0-.67-.082-1.34-.577-1.841-.495-.502-1.237-.753-1.896-.753-1.484 0-2.803 1.087-2.803 3.263v6.193h-1.979V8.117h.083zm9.893-1.255h1.896V4.519l1.978-.67v2.93h2.391v1.506h-2.39v6.443c0 .502 0 1.423 1.4 1.423.413 0 .825-.084.99-.084v1.59c-.33.084-.907.167-1.649.167-1.896 0-2.72-.586-2.72-2.343V8.284H64.88V6.862zm7.666-4.77h2.391v2.26h-2.39v-2.26zm.165 4.77h1.979v10.795h-1.979V6.862zm3.875 2.176c0-.753-.082-1.507-.082-2.176h1.978l.083 2.092c.412-1.506 1.648-2.008 2.555-2.092a9.379 9.379 0 011.402-.084v2.009c-.083 0-.248-.084-.412-.084h-.578c-2.39 0-2.885 1.422-2.885 3.263v5.774H76.67V9.037h-.083zM7.832 0C3.71 0 .33 3.431.33 7.615s3.38 7.615 7.502 7.615 7.502-3.43 7.502-7.615C15.334 3.431 11.954 0 7.832 0zm0 12.887c-2.886 0-5.194-2.343-5.194-5.272 0-2.929 2.308-5.272 5.194-5.272 2.885 0 5.194 2.343 5.194 5.272-.083 2.929-2.391 5.272-5.194 5.272zm6.677 1.674l-6.677 2.928-6.678-2.928L0 16.653 7.832 20l7.832-3.347-1.155-2.092z"></path>
          </svg>

          <div className="hidden md:flex gap-4">
            <Button
              size="md"
              className="border border-white text-white bg-transparent transition-all duration-500"
            >
              Get started
            </Button>

            <div className="flex border">
              <Button
                size="icon"
                className="border-none border-white text-white bg-transparent transition-all duration-500 hover:bg-white hover:text-black"
                onClick={() => goTo("/search")}
              >
                <Search strokeWidth={0.9} className="rotate-y-180" />
              </Button>

              <Button
                size="icon"
                className=" text-black hover:text-white bg-white border-none"
                onClick={() => goTo("/")}
              >
                <X strokeWidth={0.9} />
              </Button>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-12 w-[95%] mx-auto mt-12">
        {/* Left Navigation Section */}
        <ul className="flex flex-col gap-3 mt-12">
          <p className="border-t uppercase text-sm pt-4">navigation</p>

          {menuItem.map((item, i) => (
            <FadeUp key={item.id} delay={0.15 + i * 0.12}>
              <li className="flex flex-col">
                <span className="text-3xl font-medium text-white hover:text-gray-500 cursor-pointer my-2">
                  {item.title}
                </span>

                {item.submenu && (
                  <ul className="ml-1 mt-2 flex flex-col gap-5 text-gray-400">
                    {item.submenu.map((sub, j) => (
                      <FadeUp key={sub.id} delay={0.2 + i * 0.12 + j * 0.08}>
                        <li className="cursor-pointer hover:text-gray-300 flex gap-2 text-2xl">
                          <CornerDownRight />
                          {sub.title}
                        </li>
                      </FadeUp>
                    ))}
                  </ul>
                )}
              </li>
            </FadeUp>
          ))}
        </ul>

        {/* Middle News Section */}
        <div className="border-t mt-12">
          <div className="flex justify-between p-2">
            <p className="text-gray-400 text-sm">Latest news</p>
            <p className="text-gray-100 text-[11px] uppercase">News Room</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {newsItem.slice(0, 2).map((item, i) => (
              <FadeUp key={i} delay={0.3 + i * 0.15}>
                <div className="space-y-2">
                  <p className="text-sm">{item.from}</p>
                  <img src={item.src} alt={item.from} />
                  <Link to="#">
                    <p>{item.title}</p>
                    <br />
                    <p>{item.description}</p>
                  </Link>
                  <AnimatedButton title={item.forward} />
                </div>
              </FadeUp>
            ))}
          </div>

          <hr className="mt-5" />

          {/* Impact Section */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between p-2">
              <p className="text-gray-400 text-sm">Latest Impact</p>
              <p className="text-end text-[10px] mt-1 hover:text-gray-400 cursor-pointer underline uppercase">
                View All Impact Studies ↗
              </p>
            </div>

            <div>
              {newsItem.slice(2).map((item, i) => (
                <FadeUp key={i} delay={0.45 + i * 0.15}>
                  <div className="space-y-2">
                    <p className="text-sm">{item.from}</p>
                    <img src={item.src} alt={item.from} />
                    <Link to="#">
                      <p>{item.title}</p>
                      <br />
                      <p>{item.description}</p>
                    </Link>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* Right Offerings Section */}
        <div className="border-t mt-12">
          <FadeUp delay={0.6}>
            <div className="flex justify-between p-2">
              <p className="text-gray-400 text-sm">Offerings</p>
              <p className="text-end text-[10px] mt-1 hover:text-gray-400 cursor-pointer underline uppercase">
                View All Impact Offerings ↗
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.75}>
            <div className="flex flex-col gap-3 mt-5 flex-1">
              <p>
                Our platforms are used throughout the public, private, and
                non-profit sectors to help organizations...
              </p>
              <AnimatedButton title="Learn more about AIP" />
              <hr />

              <div className="flex justify-center">
                <FooterList
                  title="About Palantir"
                  items={menuNavItem}
                  className="text-white"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

export default Menu;
