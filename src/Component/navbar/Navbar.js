

const Navbar = () => {
    return (
        <div>
          <header class="bg-gray-900 border-b border-gray-800">
                        <div class="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
                            <div class="flex items-center justify-between h-16 lg:h-[72px]">
                                <div class="flex items-center flex-shrink-0">
                                    <a href="#" title="" class="inline-flex">
                                        <span class="sr-only">Farmer-It</span>
                                        <h class="w-auto h-8">Farmer-It</h>
                                    </a>
                                </div>

                                <div class="hidden lg:flex lg:justify-center lg:space-x-10 xl:space-x-14">
                                    <a href="#" title="" class="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"> Live Preview </a>

                                    <a href="#" title="" class="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"> Products </a>

                                    <a href="#" title="" class="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"> Farmer shop </a>

                                    <a href="#" title="" class="text-base font-medium text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white"> Contacts </a>
                                </div>

                                <div class="flex items-center justify-end space-x-5">
                                    <button type="button" class="p-2 -m-2 text-white transition-all duration-200 lg:hidden hover:text-gray-200">
                                        <img className="h-6 w-6" width="50" height="50" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" />
                                    </button>

                                    <button type="button" class="relative p-2 -m-2 text-white transition-all duration-200 hover:text-gray-200">
                                        <img className="h-6 w-6" width="50" height="50" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" />
                                        <span class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full"> 3 </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </header>
        </div>
    );
};

export default Navbar;