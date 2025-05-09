import * as React from 'react'

import { classNames } from '@/utilities/component'

export const Heading1: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ className, ...props }) => <h1 className={classNames('scroll-m-20 font-sans text-4xl leading-normal tracking-normal text-black dark:text-white', className)} {...props} />
export const Heading2: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ className, ...props }) => <h2 className={classNames('scroll-m-20 font-sans text-3xl leading-normal tracking-normal text-black dark:text-white', className)} {...props} />
export const Heading3: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ className, ...props }) => <h3 className={classNames('scroll-m-20 font-sans text-2xl leading-normal tracking-normal text-black dark:text-white', className)} {...props} />
export const Heading4: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ className, ...props }) => <h4 className={classNames('scroll-m-20 font-sans text-xl leading-normal tracking-normal text-black dark:text-white', className)} {...props} />
export const Heading5: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ className, ...props }) => <h5 className={classNames('scroll-m-20 font-sans text-lg leading-normal tracking-normal text-black dark:text-white', className)} {...props} />
export const Heading6: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ className, ...props }) => <h6 className={classNames('scroll-m-20 font-sans leading-normal tracking-normal text-black dark:text-white', className)} {...props} />

export const Paragraph: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ className, ...props }) => <p className={classNames('scroll-m-20 font-sans text-base font-normal leading-normal tracking-normal text-black dark:text-white', className)} {...props} />
export const Small: React.FC<React.HTMLProps<HTMLElement>>              = ({ className, ...props }) => <small className={classNames('scroll-m-20 font-sans text-sm font-normal leading-normal tracking-normal text-black dark:text-white', className)} {...props} />

Heading1.displayName  = 'Heading1'
Heading2.displayName  = 'Heading2'
Heading3.displayName  = 'Heading3'
Heading4.displayName  = 'Heading4'
Heading5.displayName  = 'Heading5'
Heading6.displayName  = 'Heading6'
Paragraph.displayName = 'Paragraph'
Small.displayName     = 'Small'
