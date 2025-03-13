"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Pagination from "@/hooks/Pagination"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Calendar, TrendingUp, Filter, BookOpen, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export function BentoGridBlogs({ blogs }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const [trendingBlogs, setTrendingBlogs] = useState([])
  const [viewMode, setViewMode] = useState("grid")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [showTrendingMobile, setShowTrendingMobile] = useState(false)

  useEffect(() => {
    // Set trending blogs (top 3 by views or likes)
    setTrendingBlogs(blogs.slice(0, 3))

    // Adjust items per page based on screen size
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(4)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(6)
      } else {
        setItemsPerPage(9)
      }
    }

    updateItemsPerPage()
    window.addEventListener("resize", updateItemsPerPage)
    return () => window.removeEventListener("resize", updateItemsPerPage)
  }, [blogs])

  // Filter blogs by search term and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.meta_desc && blog.meta_desc.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory =
      selectedCategory === "All Categories" ||
      selectedCategory === "" ||
      blog.category?.category_name === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage)
  const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Get unique categories
  const categories = Array.from(new Set(blogs.map((blog) => blog.category?.category_name).filter(Boolean)))

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900/30 pt-20 pb-12">
      {" "}
      {/* Added pt-20 for navbar space */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-8">
          {/* Header with search and filters */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div>
              <h2 className="text-3xl font-serif font-bold">Etiquette Journal</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Insights and guidance for refined living and professional success
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-200 dark:border-gray-700 w-full"
                />
              </div>

              <Button variant="outline" className="md:hidden" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>

              <div className="hidden md:flex items-center gap-2">
                <Tabs defaultValue="grid" onValueChange={setViewMode}>
                  <TabsList className="h-9">
                    <TabsTrigger value="grid" className="px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="3" rx="1" />
                        <rect width="7" height="7" x="14" y="14" rx="1" />
                        <rect width="7" height="7" x="3" y="14" rx="1" />
                      </svg>
                      Grid
                    </TabsTrigger>
                    <TabsTrigger value="list" className="px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <line x1="3" x2="21" y1="6" y2="6" />
                        <line x1="3" x2="21" y1="12" y2="12" />
                        <line x1="3" x2="21" y1="18" y2="18" />
                      </svg>
                      List
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px] h-9 border-gray-200 dark:border-gray-700">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Categories">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Mobile filters */}
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden space-y-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <div>
                <label className="block text-sm font-medium mb-2">View Mode</label>
                <Tabs defaultValue="grid" onValueChange={setViewMode} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="grid">Grid View</TabsTrigger>
                    <TabsTrigger value="list">List View</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full border-gray-200 dark:border-gray-700">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Categories">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          )}

          {/* Trending Articles Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold">Trending Articles</h3>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden ml-auto"
                onClick={() => setShowTrendingMobile(!showTrendingMobile)}
              >
                {showTrendingMobile ? "Hide" : "Show"}
              </Button>
            </div>

            {/* Desktop layout - trending on left */}
            <div className="hidden md:flex flex-row-reverse gap-6">
              {/* Main trending article */}
              <div className="w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {trendingBlogs.slice(1, 3).map((blog, index) => (
                  <motion.div
                    key={blog.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                    className="group"
                  >
                    <Link href={`/blogs/${blog.slug}`} className="block h-full">
                      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden h-full flex flex-col hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <Image
                            src={blog.image || "/assets/default-blog.png"}
                            alt={blog.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {blog.category?.category_name && (
                            <Badge className="absolute top-3 right-3 bg-white/80 dark:bg-gray-800/80 text-primary hover:bg-white dark:hover:bg-gray-800">
                              {blog.category.category_name}
                            </Badge>
                          )}
                        </div>

                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="text-base font-medium line-clamp-2 group-hover:text-primary transition-colors">
                            {blog.title}
                          </h3>

                          <div className="flex items-center justify-between mt-auto pt-3 text-xs text-gray-500">
                            <span>{blog.author?.first_name || "Author"}</span>
                            <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "Recent"}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Featured trending article on left */}
              {trendingBlogs.slice(0, 1).map((blog, index) => (
                <motion.div
                  key={blog.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group w-1/3"
                >
                  <Link href={`/blogs/${blog.slug}`} className="block h-full">
                    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden h-full flex flex-col hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={blog.image || "/assets/default-blog.png"}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {blog.category?.category_name && (
                          <Badge className="absolute top-3 right-3 bg-primary/80 hover:bg-primary text-white">
                            {blog.category.category_name}
                          </Badge>
                        )}
                      </div>

                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mt-2 flex-grow">
                          {blog.meta_desc || "No description available"}
                        </p>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage
                                src={blog.author?.image || "/assets/Manasi_kadam_image.jpg"}
                                alt={blog.author?.first_name || "Author"}
                              />
                              <AvatarFallback>{blog.author?.first_name?.[0] || "A"}</AvatarFallback>
                            </Avatar>
                            <span className="text-xs">{blog.author?.first_name || "Author"}</span>
                          </div>

                          <div className="flex items-center text-xs text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "Recent"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile trending articles - collapsible */}
            {showTrendingMobile && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden space-y-4"
              >
                {trendingBlogs.map((blog, index) => (
                  <Link key={blog.id || index} href={`/blogs/${blog.slug}`} className="block">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      <div className="flex flex-row">
                        <div className="relative w-1/3 aspect-square">
                          <Image
                            src={blog.image || "/assets/default-blog.png"}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="p-3 w-2/3 flex flex-col">
                          <div className="mb-1">
                            {blog.category?.category_name && (
                              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                                {blog.category.category_name}
                              </Badge>
                            )}
                          </div>

                          <h3 className="text-sm font-medium line-clamp-2">{blog.title}</h3>

                          <div className="flex items-center justify-between mt-auto pt-1 text-xs text-gray-500">
                            <span>{blog.author?.first_name || "Author"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          {/* Main Blog Grid/List */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold">All Articles</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({filteredBlogs.length} articles)</span>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedBlogs.length > 0 ? (
                  paginatedBlogs.map((blog, index) => (
                    <motion.div
                      key={blog.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <Link href={`/blogs/${blog.slug}`} className="block h-full">
                        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden h-full flex flex-col hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={blog.image || "/assets/default-blog.png"}
                              alt={blog.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {blog.category?.category_name && (
                              <Badge className="absolute top-3 right-3 bg-white/80 dark:bg-gray-800/80 text-primary hover:bg-white dark:hover:bg-gray-800">
                                {blog.category.category_name}
                              </Badge>
                            )}
                          </div>

                          <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg font-medium line-clamp-2 group-hover:text-primary transition-colors">
                              {blog.title}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mt-2 flex-grow">
                              {blog.meta_desc || "No description available"}
                            </p>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage
                                    src={blog.author?.image || "/assets/Manasi_kadam_image.jpg"}
                                    alt={blog.author?.first_name || "Author"}
                                  />
                                  <AvatarFallback>{blog.author?.first_name?.[0] || "A"}</AvatarFallback>
                                </Avatar>
                                <span className="text-xs">{blog.author?.first_name || "Author"}</span>
                              </div>

                              <div className="flex items-center text-xs text-gray-500">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "Recent"}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full flex items-center justify-center py-12 text-gray-500">
                    No articles found matching your criteria
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-5">
                {paginatedBlogs.length > 0 ? (
                  paginatedBlogs.map((blog, index) => (
                    <motion.div
                      key={blog.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <Link href={`/blogs/${blog.slug}`} className="block">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                          <div className="flex flex-col sm:flex-row">
                            <div className="relative sm:w-1/4 aspect-video sm:aspect-auto">
                              <Image
                                src={blog.image || "/assets/default-blog.png"}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>

                            <div className="p-5 sm:w-3/4 flex flex-col">
                              <div className="flex items-center gap-2 mb-2 flex-wrap">
                                {blog.category?.category_name && (
                                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                                    {blog.category.category_name}
                                  </Badge>
                                )}
                                <span className="text-xs text-gray-500">
                                  {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "Recent"}
                                </span>
                              </div>

                              <h3 className="text-xl font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                {blog.title}
                              </h3>

                              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-2">
                                {blog.meta_desc || "No description available"}
                              </p>

                              <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage
                                      src={blog.author?.image || "/assets/Manasi_kadam_image.jpg"}
                                      alt={blog.author?.first_name || "Author"}
                                    />
                                    <AvatarFallback>{blog.author?.first_name?.[0] || "A"}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-xs font-medium">
                                    {blog.author?.first_name || "Author"} {blog.author?.last_name || ""}
                                  </span>
                                </div>

                                <Button variant="ghost" size="sm" className="text-primary gap-1 h-8 px-2 text-xs">
                                  Read More <ChevronRight className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <div className="flex items-center justify-center py-12 text-gray-500">
                    No articles found matching your criteria
                  </div>
                )}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center w-full mt-12">
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
              </div>
            )}
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 bg-primary/5 dark:bg-primary/10 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-serif font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stay updated with the latest etiquette tips, event invitations, and exclusive content delivered directly
                to your inbox.
              </p>
            </div>

            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow border-gray-200 dark:border-gray-700"
                  required
                />
                <Button className="bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

