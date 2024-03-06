import React from 'react'
import { Sparkles } from 'lucide-react';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const input = () => {
    return (
        <div className=' bg-black p-5 rounded-full border border-gray-100 border-opacity-20 mt-96'>
            <div className=' flex gap-5'>
                <Input
                    id='name'
                    placeholder='Search'
                    className=' bg-transparent border-none text-white outline-none'
                />
                <Button variant="outline" className=' rounded-full text-bolder'>
                    <span><Sparkles /></span>
                    <span className=' text-lg font-bold ml-2'>Shop</span>
                </Button>

            </div>
        </div>
    )
}

export default input