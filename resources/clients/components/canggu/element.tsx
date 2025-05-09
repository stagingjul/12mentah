import * as React from 'react'

type PropsDiv            = React.HTMLProps<HTMLDivElement>
type PropsSpan           = React.HTMLProps<HTMLSpanElement>
type PropsMain           = React.HTMLProps<HTMLElement>
type PropsHeader         = React.HTMLProps<HTMLElement>
type PropsSection        = React.HTMLProps<HTMLElement>
type PropsNav            = React.HTMLProps<HTMLElement>
type PropsAside          = React.HTMLProps<HTMLElement>
type PropsFooter         = React.HTMLProps<HTMLElement>
type PropsArticle        = React.HTMLProps<HTMLElement>
type PropsFigure         = React.HTMLProps<HTMLElement>
type PropsFigcaption     = React.HTMLProps<HTMLElement>
type PropsMark           = React.HTMLProps<HTMLElement>
type PropsSummary        = React.HTMLProps<HTMLElement>
type PropsUnorderedList  = React.HTMLProps<HTMLUListElement>
type PropsOrderedList    = React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>
type PropsList           = React.HTMLProps<HTMLLIElement>
type PropsBlockquote     = React.HTMLProps<HTMLQuoteElement>
type PropsRule           = React.HTMLProps<HTMLHRElement>
type PropsBreak          = React.HTMLProps<HTMLBRElement>
type PropsAnchor         = React.HTMLProps<HTMLAnchorElement>
type PropsImage          = React.HTMLProps<HTMLImageElement>
type PropsTime           = React.HTMLProps<HTMLTimeElement>
type PropsDetails        = React.HTMLProps<HTMLDetailsElement>
type PropsCode           = React.HTMLProps<HTMLElement>
type PropsPre            = React.HTMLProps<HTMLPreElement>
type PropsSVG            = React.SVGProps<SVGSVGElement>
type PropsPath           = React.SVGProps<SVGPathElement>
type PropsCircle         = React.SVGProps<SVGCircleElement>
type PropsEllipse        = React.SVGProps<SVGEllipseElement>
type PropsLine           = React.SVGProps<SVGLineElement>
type PropsRect           = React.SVGProps<SVGRectElement>
type PropsPolygon        = React.SVGProps<SVGPolygonElement>
type PropsPolyline       = React.SVGProps<SVGPolylineElement>
type PropsG              = React.SVGProps<SVGGElement>
type PropsText           = React.SVGProps<SVGTextElement>
type PropsTspan          = React.SVGProps<SVGTSpanElement>
type PropsClipPath       = React.SVGProps<SVGClipPathElement>
type PropsDefs           = React.SVGProps<SVGDefsElement>
type PropsLinearGradient = React.SVGProps<SVGLinearGradientElement>
type PropsRadialGradient = React.SVGProps<SVGRadialGradientElement>
type PropsStop           = React.SVGProps<SVGStopElement>
type PropsMask           = React.SVGProps<SVGMaskElement>
type PropsPattern        = React.SVGProps<SVGPatternElement>
type PropsMarker         = React.SVGProps<SVGMarkerElement>
type PropsForeignObject  = React.SVGProps<SVGForeignObjectElement>

export const Div            = React.forwardRef<HTMLDivElement, PropsDiv>(({ ...props }, ref)                      => <div ref={ref} {...props} />)
export const Span           = React.forwardRef<HTMLSpanElement, PropsSpan>(({ ...props }, ref)                    => <span ref={ref} {...props} />)
export const Main           = React.forwardRef<HTMLElement, PropsMain>(({ ...props }, ref)                        => <main ref={ref} {...props} />)
export const Header         = React.forwardRef<HTMLElement, PropsHeader>(({ ...props }, ref)                      => <header ref={ref} {...props} />)
export const Section        = React.forwardRef<HTMLElement, PropsSection>(({ ...props }, ref)                     => <section ref={ref} {...props} />)
export const Nav            = React.forwardRef<HTMLElement, PropsNav>(({ ...props }, ref)                         => <nav ref={ref} {...props} />)
export const Aside          = React.forwardRef<HTMLElement, PropsAside>(({ ...props }, ref)                       => <aside ref={ref} {...props} />)
export const Footer         = React.forwardRef<HTMLElement, PropsFooter>(({ ...props }, ref)                      => <footer ref={ref} {...props} />)
export const Article        = React.forwardRef<HTMLElement, PropsArticle>(({ ...props }, ref)                     => <article ref={ref} {...props} />)
export const Figure         = React.forwardRef<HTMLElement, PropsFigure>(({ ...props }, ref)                      => <figure ref={ref} {...props} />)
export const Figcaption     = React.forwardRef<HTMLElement, PropsFigcaption>(({ ...props }, ref)                  => <figcaption ref={ref} {...props} />)
export const Mark           = React.forwardRef<HTMLElement, PropsMark>(({ ...props }, ref)                        => <mark ref={ref} {...props} />)
export const Summary        = React.forwardRef<HTMLElement, PropsSummary>(({ ...props }, ref)                     => <summary ref={ref} {...props} />)
export const UnorderedList  = React.forwardRef<HTMLUListElement, PropsUnorderedList>(({ ...props }, ref)          => <ul ref={ref} {...props} />)
export const OrderedList    = React.forwardRef<HTMLOListElement, PropsOrderedList>(({ ...props }, ref)            => <ol ref={ref} {...props} />)
export const List           = React.forwardRef<HTMLLIElement, PropsList>(({ ...props }, ref)                      => <li ref={ref} {...props} />)
export const Blockquote     = React.forwardRef<HTMLQuoteElement, PropsBlockquote>(({ ...props }, ref)             => <blockquote ref={ref} {...props} />)
export const Rule           = React.forwardRef<HTMLHRElement, PropsRule>(({ ...props }, ref)                      => <hr ref={ref} {...props} />)
export const Break          = React.forwardRef<HTMLBRElement, PropsBreak>(({ ...props }, ref)                     => <br ref={ref} {...props} />)
export const Anchor         = React.forwardRef<HTMLAnchorElement, PropsAnchor>(({ ...props }, ref)                => <a ref={ref} {...props} />)
export const Image          = React.forwardRef<HTMLImageElement, PropsImage>(({ ...props }, ref)                  => <img ref={ref} {...props} />)
export const Time           = React.forwardRef<HTMLTimeElement, PropsTime>(({ ...props }, ref)                    => <time ref={ref} {...props} />)
export const Details        = React.forwardRef<HTMLDetailsElement, PropsDetails>(({ ...props }, ref)              => <details ref={ref} {...props} />)
export const Code           = React.forwardRef<HTMLElement, PropsCode>(({ ...props }, ref)                        => <code ref={ref} {...props} />)
export const Pre            = React.forwardRef<HTMLPreElement, PropsPre>(({ ...props }, ref)                      => <pre ref={ref} {...props} />)
export const SVG            = React.forwardRef<SVGSVGElement, PropsSVG>(({ ...props }, ref)                       => <svg ref={ref} {...props} />)
export const Path           = React.forwardRef<SVGPathElement, PropsPath>(({ ...props }, ref)                     => <path ref={ref} {...props} />)
export const Circle         = React.forwardRef<SVGCircleElement, PropsCircle>(({ ...props }, ref)                 => <circle ref={ref} {...props} />)
export const Ellipse        = React.forwardRef<SVGEllipseElement, PropsEllipse>(({ ...props }, ref)               => <ellipse ref={ref} {...props} />)
export const Line           = React.forwardRef<SVGLineElement, PropsLine>(({ ...props }, ref)                     => <line ref={ref} {...props} />)
export const Rect           = React.forwardRef<SVGRectElement, PropsRect>(({ ...props }, ref)                     => <rect ref={ref} {...props} />)
export const Polygon        = React.forwardRef<SVGPolygonElement, PropsPolygon>(({ ...props }, ref)               => <polygon ref={ref} {...props} />)
export const Polyline       = React.forwardRef<SVGPolylineElement, PropsPolyline>(({ ...props }, ref)             => <polyline ref={ref} {...props} />)
export const G              = React.forwardRef<SVGGElement, PropsG>(({ ...props }, ref)                           => <g ref={ref} {...props} />)
export const Text           = React.forwardRef<SVGTextElement, PropsText>(({ ...props }, ref)                     => <text ref={ref} {...props} />)
export const Tspan          = React.forwardRef<SVGTSpanElement, PropsTspan>(({ ...props }, ref)                   => <tspan ref={ref} {...props} />)
export const ClipPath       = React.forwardRef<SVGClipPathElement, PropsClipPath>(({ ...props }, ref)             => <clipPath ref={ref} {...props} />)
export const Defs           = React.forwardRef<SVGDefsElement, PropsDefs>(({ ...props }, ref)                     => <defs ref={ref} {...props} />)
export const LinearGradient = React.forwardRef<SVGLinearGradientElement, PropsLinearGradient>(({ ...props }, ref) => <linearGradient ref={ref} {...props} />)
export const RadialGradient = React.forwardRef<SVGRadialGradientElement, PropsRadialGradient>(({ ...props }, ref) => <radialGradient ref={ref} {...props} />)
export const Stop           = React.forwardRef<SVGStopElement, PropsStop>(({ ...props }, ref)                     => <stop ref={ref} {...props} />)
export const Mask           = React.forwardRef<SVGMaskElement, PropsMask>(({ ...props }, ref)                     => <mask ref={ref} {...props} />)
export const Pattern        = React.forwardRef<SVGPatternElement, PropsPattern>(({ ...props }, ref)               => <pattern ref={ref} {...props} />)
export const Marker         = React.forwardRef<SVGMarkerElement, PropsMarker>(({ ...props }, ref)                 => <marker ref={ref} {...props} />)
export const ForeignObject  = React.forwardRef<SVGForeignObjectElement, PropsForeignObject>(({ ...props }, ref)   => <foreignObject ref={ref} {...props} />)

Div.displayName            = 'Div'
Span.displayName           = 'Span'
Main.displayName           = 'Main'
Header.displayName         = 'Header'
Section.displayName        = 'Section'
Nav.displayName            = 'Nav'
Aside.displayName          = 'Aside'
Footer.displayName         = 'Footer'
Article.displayName        = 'Article'
Figure.displayName         = 'Figure'
Figcaption.displayName     = 'Figcaption'
Mark.displayName           = 'Mark'
Summary.displayName        = 'Summary'
UnorderedList.displayName  = 'UnorderedList'
OrderedList.displayName    = 'OrderedList'
List.displayName           = 'List'
Blockquote.displayName     = 'Blockquote'
Rule.displayName           = 'Horizontal Rule'
Break.displayName          = 'Break'
Anchor.displayName         = 'Anchor'
Image.displayName          = 'Image'
Time.displayName           = 'Time'
Details.displayName        = 'Details'
Code.displayName           = 'Code'
Pre.displayName            = 'Pre'
SVG.displayName            = 'Svg'
Path.displayName           = 'Path'
Circle.displayName         = 'Circle'
Ellipse.displayName        = 'Ellipse'
Line.displayName           = 'SvgLine'
Rect.displayName           = 'Rect'
Polygon.displayName        = 'Polygon'
Polyline.displayName       = 'Polyline'
G.displayName              = 'G'
Text.displayName           = 'Text'
Tspan.displayName          = 'Tspan'
ClipPath.displayName       = 'ClipPath'
Defs.displayName           = 'Defs'
LinearGradient.displayName = 'LinearGradient'
RadialGradient.displayName = 'RadialGradient'
Stop.displayName           = 'Stop'
Mask.displayName           = 'Mask'
Pattern.displayName        = 'Pattern'
Marker.displayName         = 'Marker'
ForeignObject.displayName  = 'ForeignObject'
