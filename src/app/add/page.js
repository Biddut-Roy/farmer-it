"use client"
import { useForm } from "react-hook-form";


const Page = () => {
        // const navigate = useNavigate()
    // const SecureAxios = useAxiosSecure()
    // const { user } = useAuth()
    // const publicAxios = usePublicAxios()
    // const IMG_IMG_HOSTING = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY_IMGBB}`
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

     // const { isPending, error, refetch, data: store = {} } = useQuery({
    //     queryKey: ['shop-data'],
    //     queryFn: async () => {
    //         const res = await SecureAxios.get(`/shop-data/${user?.email}`)
    //         return res.data
    //     }
    // })


    // if (isPending) return 'Loading...'
    // if (error) return 'An error has occurred: ' + error.message
    // refetch()

    // const Limit = parseInt(store?.limit - 1)

    const onSubmit = async (data) => {
        const cost = parseInt(data?.Cost)
        const profit = parseFloat(data?.Profit_Margin)
        const SellingPrice = parseFloat(cost + ((cost * 7.5) / 100) + ((cost * profit) / 100))
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        const currentDateStr = `${currentYear}/${currentMonth}/${currentDay}`;

        if (store?.limit<= 0) {
            toast.error("Product Added Limited. Subscription please")
        } else { 
            const imgFile = { image: data.image[0] }
            const res = await publicAxios.post(IMG_IMG_HOSTING, imgFile, {
                headers: { "content-type": "multipart/form-data" }
            })
            if (res.data.success) {
                const productData = {
                    setLimit: Limit,
                    saleCount: 0,
                    date: currentDateStr,
                    user_email: user?.email,
                    shop_Id: store?._id,
                    shop_Name: store?.shop_name,
                    sellingPrice: SellingPrice,
                    cost: cost,
                    profit: profit,
                    discount: data.Discount,
                    quantity: data.Quantity,
                    product_name: data.Product_Name,
                    Area: data.Area,
                    description: data.Description,
                    photo: res.data?.data?.display_url
                }
                console.log(productData)
                SecureAxios.post('/add-product', productData)
                    .then(res => {
                        if (res.data._id) {
                            reset()
                            refetch()
                            navigate("/dashboard")
                            Swal.fire({
                                title: "Your Product has been added successfully ",
                                showClass: {
                                    popup: `
                                                    animate__animated
                                                    animate__fadeInUp
                                                    animate__faster
                                                `
                                },
                                hideClass: {
                                    popup: `
                                                animate__animated
                                                animate__fadeOutDown
                                                animate__faster
                                            `
                                }
                            });

                        }
                    })
            }
        }
    }

    return (
             <div> 
           <h1 className=" text-2xl font-bold text-blue-700 mt-10 text-center">Add Your Product </h1>
           <form onSubmit={handleSubmit(onSubmit)} className=" ">
               <div className="w-10/12 md:w-10/12 lg:w-10/12 my-14 mx-auto grid grid-cols-2 gap-5">
                   <div className="form-control">
                       <label className="label">
                           <span className=" label-text text-gray-400">Product Name</span>
                       </label>
                       <input type="text" className="pl-4" placeholder="Product Name" {...register("Product_Name", { required: true, maxLength: 80 })} />
                   </div>
                   <div className="form-control">
                       <label className="label">
                           <span className=" label-text text-gray-400">Quantity</span>
                       </label>
                       <input type="number" className="pl-4 " placeholder="Quantity by kg" {...register("Quantity", { required: true, maxLength: 100 })} />
                   </div>
                   <div className="form-control">
                       <label className="label">
                           <span className=" label-text text-gray-400">Area</span>
                       </label>
                       <input type="text" className="pl-4 " placeholder="Area" {...register("Area", { required: true })} />
                   </div>
                   <div className="form-control">
                       <label className="label">
                           <span className=" label-text text-gray-400">product Cost</span>
                       </label>
                       <input type="number" className="pl-4 " placeholder="Cost by kg" {...register("Cost", { required: true })} />
                   </div>
                   <div className="form-control">
                       <label className="label">
                           <span className=" label-text text-gray-400">Profit Margin (%)</span>
                       </label>
                       <input type="number" className="pl-4 " placeholder="Profit Margin (%)" {...register("Profit_Margin", { required: true })} />
                   </div>
                   <div className="form-control">
                       <label className="label">
                           <span className=" label-text text-gray-400">Discount (%)</span>
                       </label>
                       <input type="number" className="pl-4 " placeholder="Discount (%)" {...register("Discount", { required: true })} />
                   </div>
                   <div className="form-control">
                       <label className="label">
                           <span className=" label-text text-gray-400">Description</span>
                       </label>
                       <textarea {...register("Description", { required: true })} />
                   </div>
                   <div className="form-control">
                       <label className="label ">
                           <span className=" label-text text-gray-400">product img</span>
                       </label>
                       <input type="file" {...register("image", { required: true })} className=" input-bordered" />
                       {errors.firstName?.type === "image" && (
                           <p className=" text-red-400">photo is required</p>
                       )}
                   </div>
                   <div className="form-control flex justify-center mt-8">
                       <input className=" btn btn-primary bg-blue-700 btn-sm" type="submit" value='Add Product' />
                   </div>
               </div>
           </form>
           {/* <Toaster
               position="top-center"
               reverseOrder={false}
           /> */}
       </div>
    );
};


export default Page;