"use cient"
import Image from "next/image";
import Carousel from '@/components/Carousel'
import Link from 'next/link'

export default function Home() {
  return (
<>
  <div className="min-h-screen flex flex-col bg-gray-900">

    {/* Overlay */}
    <div className="  bg-black/70   z-999  shadow-xl shadow-black-500/30 ">
	  <div className="max-w-full    mx-auto  relative grid  grid-flow-col grid-rows-1 gap-4 ">
	    <div className=" row-span-2 col m-5 justify-left">
	       <Image className="h-5  "
                   src='images/natflix/nat.svg'
                   alt=" natflix"
                   width={140}
                   height={40}

               /> 
		</div>	 

		
	    <div className="  col m-5 justify-right">
		  <div className=" flex bg-pink-500 rounded text-white max-w-50 p-2 gap-4 absolute top-3 right-3 ">
		  <Link className=" flex grid-flow-col grid-rows-1  "
		    href="https://hotmart.com/pt-br/marketplace/produtos/natflix-fitness/J52484495T?ref=K100685827B" 		>	
		        <Image className="h-5 stroke-current  "
                   src='images/natflix/apple-svgrepo-com.svg'
                   alt=" Area da Aluna"
                   width={40}
                   height={40}

               />

              <b className=" flex justify-left ">		
			   Area da Aluna
			   </b>	
		    </Link>
	         </div>	 
		</div>	 

	  </div>			

	</div>
	
	<div className="  flex items-center justify-center h-screen mb-12 overflow-hidden">

  
	
  <video
        id="produtoVideo"
        src='video_pag_1.mp4'
        playsInline
        loop
		autoPlay
		muted
        className='absolute  w-auto min-w-full min-h-full max-w-none'
      ></video>



  <div className="flex justify-center z-20  min-w-screen p-5  lg:mt-3	sm:mt-15	md:mt-15	mt-40 ">
	
		<div className="hero_content-2 align-center text-align-center ">
			<div className="">
				<h1 className="lg:text-7xl text-5xl  sm:text-3xl  	text-white text-center"> 
				 <b className="font-sans">a maior</b> <br /> 
				 <b className="font-mono">plataforma </b> <br/>
				 <b className="font-mono">fitness do Brasil</b> <br/>
 				 <b className="font-sans" >feita para  </b> <b  className="underline text-6xl"> mulheres reais </b> </h1>
			</div>
   
			<div className="img-top1-wrapper">
				<div className="text-sm  p-10 text-center">
				     <b className="text-white"> Brasil: top 1 de hoje </b>
				     <b className=" text-emerald-300"> 99% gostaram </b>
				     <b className="text-white border rounded border-white p-1">  +18</b>
					 
					
				</div>
				 <div className="text-center justify-center max-w-12xl">
				  <div className="ml-15 mr-15  flex justify-center  shadow-xl shadow-pink-500/30 m-2  	z-30 p-5 text-2xl sm:text-md text-white text-center bg-pink-500 bg-opacity-50 rounded-xl hover:bg-pink-600 hover:p-6 hover:text-3xl cursor-pointer">
		
				<Link  href="https://hotmart.com/pt-br/marketplace/produtos/natflix-fitness/J52484495T?ref=K100685827B">
				Começe agora a sua transformação!
				</Link>
				 	</div>
				<br/>
				 <div className="mt-6	 text-2xl flex justify-center bg-black opacity-30  min-w-screen drop-shadow-sm">
				 <b className="relative mt-5 text-white pb-35 pt-5 sm:pb-5 "> + de 90 mil alunas já transformaram seus corpos e suas vidas com a Natflix</b>
				</div>

				</div>
            </div>
	    </div>
		 
	</div>

</div>




    {/* Seção Planos */}
    <div id="planos" className="relative bg-gray-900 text-white py-16">
   
   
    <div className=" max-w-6xl  mx-auto text-center  relative grid bg-gray-900 grid-flow-col grid-rows-1 gap-4">
	  <div className="row-span-3  bg-pink-400 rounded transition delay-100 duration-300 ease-in-out  hover:rotate-3 hover:-translate-6  hover:shadow-xl hover:shadow-pink-500/30">
	    <div className="flex justify-left mb-6 mt-6  ">
				<div className="bg-pink-600 rounded-full p-4 m-5 max-h-18  ">
				  <Image className="flex justify-center min-w-10 min-h-10"
					   src='images/natflix/muscle-gain-svgrepo-com.svg'
					   alt="Guias, agendas e materiais didáticos"
					   width={40}
					   height={40}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono   sm:text-3xl   ">
			   Muito além da musculação: pilates, spinning, corrida, yoga, alongamento e mais!
			  </div>
			  </div>
			   
				
	  </div>
	  <div className="col-span-2  sm:col-span-1 bg-pink-400 rounded   transition delay-100 duration-300 ease-in-out  hover:rotate-3 hover:-translate-6  hover:shadow-xl hover:shadow-pink-700/30">
	  <div className="flex justify-left mb-6 mt-6">
	            <div className="bg-pink-600 rounded-full p-4 m-5 max-h-18">
				  <Image className="flex justify-center min-w-10 min-h-10"
					   src='images/natflix/happy-smiling-emoticon-square-face-with-sunglasses-svgrepo-com.svg'
					   alt="Guias, agendas e materiais didáticos"
					   width={40}
					   height={40}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono sm:text-3xl ">
			   Já São Mais de 95 mulheres transformadas
			  </div>
			    </div>
	  </div>
	  <div className="col-span-2 sm:col-span-1 row-span-2   bg-pink-400 rounded  transition delay-100 duration-300 ease-in-out  hover:rotate-3 hover:-translate-6  hover:shadow-xl hover:shadow-pink-700/30">
	  <div className="flex justify-left mb-6 mt-6">
	        <div className="bg-pink-600 rounded-full p-4 m-5 max-h-18">
				  <Image className="flex justify-center min-w-10 min-h-10"
					   src='images/natflix/content-clipboard-document-paper-paste-icon-svgrepo-com.svg'
					   alt="Guias, agendas e materiais didáticos"
					   width={40}
					   height={40}
				   /> 			
				
				</div>
				<div className="flex justify-center m-5 text-4xl font-mono sm:text-3xl ">
			   Com mais de 2.600 conteúdos publicados
			  </div>
			   </div>
	  </div>
	</div>

   
   
	  
	  
	  <div id="modulos" className="px-4 md:px-8 mt-20 ">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ícone */}
          <div className="flex justify-center mb-6 mt-6">
            <div className="bg-pink-600 rounded-full p-4">
			  <Image 
                   src='images/natflix/muscle-gain-svgrepo-com.svg'
                   alt="Guias, agendas e materiais didáticos"
                   width={40}
                   height={40}
               /> 			
            
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold">
           Módulos Essenciais para você ter o tão sonhado SHAPE.
          </h2>

          {/* Espaço */}
          <div className="mt-4" />

          {/* Subtítulo */}
          <p className="text-lg text-gray-300">
            O segredo das Atletas Profissionais.
          </p>
        </div>
      </div>
	  
	    <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-8 px-4 ">
			  <div className="bg-gray-800 rounded-lg p-6 shadow-lg min-h-50">
			<Carousel
			   time='2000'
			/>
			</div>
			  <div className="bg-gray-800 rounded-lg p-6 shadow-lg min-h-50">
			<Carousel
			   time='3000'
			/>
			</div>
			  <div className="bg-gray-800 rounded-lg p-6 shadow-lg min-h-50">
			<Carousel
			   time='1000'
			/>
			</div>

		</div>
		
		
		{/* conteudo */}
		  <div className="px-4 md:px-8 mt-20 ">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ícone */}
          <div className="flex justify-center mb-6 mt-6">
             <div className="bg-pink-600 rounded-full p-4">
			  <Image 
                   src='images/natflix/gift-svgrepo-com.svg'
                   alt="Guias, agendas e materiais didáticos"
                   width={40}
                   height={40}
               /> 			
            
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold">
           Só na NatFlix, Você tem acesso a:
          </h2>

          {/* Espaço */}
          <div className="mt-4" />


        </div>
      </div>
		
		 <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-4 gap-8 px-4 ">
			  <div className="bg-pink-800 rounded-lg shadow-lg shadow-pink-600  hover:p-1 ">
			   <Image className="responsive rounded border border-4 border-dashed border-pink-500 hover:border-line transition delay-100 duration-300 ease-in-out   hover:rotate-3 hover:-translate-6"
                   src='images/natflix/card1.jpg'
                   alt="Guias, agendas e materiais didáticos"
                   width={500}
                   height={300}
               /> 
			  </div>
			  
			  <div className="bg-pink-800 rounded-lg shadow-lg shadow-pink-600  hover:p-1 ">
			   <Image className="responsive rounded border border-4 border-dashed border-pink-500 hover:border-line  transition delay-100 duration-300 ease-in-out  hover:rotate-3 hover:-translate-6"
                   src='images/natflix/card2.jpg'
                   alt="Projetos Exclusivos"
                   width={500}
                   height={300}
               /> 
			  </div>
			  
			  <div className="bg-pink-800 rounded-lg shadow-lg shadow-pink-600  hover:p-1 ">
			   <Image className="responsive rounded border border-4 border-dashed border-pink-500 hover:border-line  transition delay-100 duration-300 ease-in-out  hover:rotate-3 hover:-translate-6"
                   src='images/natflix/card3.jpg'
                   alt="Suporte Personalizado"
                   width={500}
                   height={300}
               /> 
			  </div>
			  
			  <div className="bg-pink-800 rounded-lg shadow-lg shadow-pink-600  hover:p-1">
			   <Image className="responsive rounded border border-4 border-dashed border-pink-500 hover:border-line transition delay-100 duration-300 ease-in-out  hover:rotate-3 hover:-translate-6"
                   src='images/natflix/card4.jpg'
                   alt="Treinos Rapidex e fichas reduzidas"
                   width={500}
                   height={300}
               /> 
			  </div>
		</div>

		
		{/* depoimentos */}
		
	  <div className="px-4 md:px-8 mt-20 ">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ícone */}
          <div className="flex justify-center mb-6 mt-6">
             <div className="bg-pink-600 rounded-full p-4">
			  <Image 
                   src='images/natflix/heart-pulse-svgrepo-com.svg'
                   alt="Guias, agendas e materiais didáticos"
                   width={40}
                   height={40}
               /> 			
            
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold">
           Elas decidiram se priorizar. E transformaram suas vidas com a Natflix.
          </h2>

          {/* Espaço */}
          <div className="mt-4" />
       </div>

        </div>
		    
		 <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-8 px-4 ">
			  <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border ">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_1.png'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			   	 
			   
			   
			  </div>

			  <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_2.png'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>
		
			  <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_3.png'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>
		
			  <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_4.png'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>

			  <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_5.png'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>
	
			  <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_6.jpeg'
                  alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>
	
			  <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_7.jpeg'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>

			  <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_8.jpeg'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>

			  <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_9.jpeg'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>

			  <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_10.jpeg'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>
			   <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_11.jpeg'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			    <Image className="responsive"
                   src='images/natflix/antes_depois_12.jpeg'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>
			   <div className="bg-gray-800 p-1 shadow-lg min-h-50 hover:border-pink-500 hover:border-dotted hover:border-2 hover:border">
			   <Image className="responsive"
                   src='images/natflix/antes_depois_13.jpeg'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			    <Image className="responsive"
                   src='images/natflix/antes_depois_14.jpeg'
                   alt=" foto Antes de depois"
                   width={500}
                   height={300}

               /> 
			  </div>
		</div>
		
	
		
		
		
		   <div className="px-4 md:px-8 ">
        <div className="max-w-2xl mx-auto text-center">
          {/* Ícone */}
          <div className="flex justify-center mb-6 mt-6">
             <div className="bg-pink-600 rounded-full p-4">
			  <Image 
                   src='images/natflix/thunder-svgrepo-com.svg'
                   alt="Guias, agendas e materiais didáticos"
                   width={40}
                   height={40}
               /> 			
            
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold">
            Assine e tenha acesso a todos os conteúdos da plataforma.
          </h2>

          {/* Espaço */}
          <div className="mt-4" />

          {/* Subtítulo */}
          <p className="text-lg text-gray-300">
            Sem surpresas, sem cobranças extras.
          </p>
        </div>
      </div>
	  
	  
	  {/* Cards de preços */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-8 px-4">
        {/* Card Dark */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg min-h-100">
          <div>
            <h3 className="text-2xl font-semibold">Plano Mensal</h3>
            <p className="text-sm text-green-400 mt-1 min-h-6"></p>
            <h3 className="text-3xl font-bold mt-4">
              R$ 64,90
              <span className="text-base font-medium text-gray-300"> /mês</span>
            </h3>
            <h3 className="text-xl mt-2 text-gray-300 min-h-6"></h3>

            {/* Informações extras */}
            <div className="mt-4 space-y-1 text-gray-400 text-sm">
              <p>* renovação automática mensal</p>
              <p>* cancele quando quiser</p>
			  <div className="flex">
			<Link  href="https://hotmart.com/pt-br/marketplace/produtos/natflix-fitness/J52484495T?ref=K100685827B" className="relative mt-10 shadow-xl shadow-pink-500/30 		z-30 p-5 text-2xl text-white text-center bg-pink-500 bg-opacity-50 rounded-xl hover:bg-pink-600 hover:p-6 hover:text-3xl cursor-pointer">
					Começe agora!
				</Link>
				</div>
            </div>
			 
          </div>
        </div>
		
		
		   {/* Card Dark */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg min-h-100">
          <div>
            <h3 className="text-2xl font-semibold">Plano Semestral</h3>
            <p className="text-sm text-green-400 mt-1 min-h-6" ></p>
            <h3 className="text-3xl font-bold mt-4">
              R$ 59,55
              <span className="text-base font-medium text-gray-300"> /mês</span>
            </h3>
            <h3 className="text-xl mt-2 text-gray-300">ou R$ 317,40 à vista</h3>

            {/* Informações extras */}
            <div className="mt-4 space-y-1 text-gray-400 text-sm">
              <p>* renovação automática a cada 12 meses</p>
              <p>* incidência de juros conforme parcelamento</p>
			  <div className="flex">
			  <Link  href="https://pay.hotmart.com/J52484495T?off=p3xmrqmh&ref=K100685827B&bid=1753480379749" className="relative mt-10 shadow-xl shadow-pink-500/30	z-30 p-5 text-2xl text-white text-center bg-pink-500 bg-opacity-50 rounded-xl hover:bg-pink-600 hover:p-6 hover:text-3xl cursor-pointer">
					Começe agora!
				</Link>
				</div>
            </div>
			
            </div>
        </div>



        {/* Card Dark */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg min-h-100">
          <div>
            <h3 className="text-2xl font-semibold">Plano Anual</h3>
            <p className="text-sm text-green-400 mt-1">MELHOR CUSTO BENEFÍCIO</p>
            <h3 className="text-3xl font-bold mt-4">
              R$ 55,72
              <span className="text-base font-medium text-gray-300"> /mês</span>
            </h3>
            <h3 className="text-xl mt-2 text-gray-300">ou R$ 538,80 à vista</h3>

            {/* Informações extras */}
            <div className="mt-4 space-y-1 text-gray-400 text-sm">
              <p>* renovação automática a cada 12 meses</p>
              <p>* incidência de juros conforme parcelamento</p>
			  <div className="flex">
			  <Link  href="https://go.hotmart.com/K100685827B?ap=5034" className="relative mt-10 shadow-xl shadow-pink-500/30	z-30 p-5 text-2xl text-white text-center bg-pink-500 bg-opacity-50 rounded-xl hover:bg-pink-600 hover:p-6 hover:text-3xl cursor-pointer">
					Começe agora!
				</Link>
				</div>
            </div>
			
          </div>
        </div>
		
      </div>
			  

    
    </div>
  </div>
</>

  );
}
