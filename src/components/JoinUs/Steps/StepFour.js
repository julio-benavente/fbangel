import React, { useState, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";

// Components
import OptionInput from "../OptionInput";
import TextInput from "../TextInput";
import FileInput from "../FileInput";

// Styles
import { FormFour } from "../../../styles/JoinUsPageStyles";

const StepFour = () => {
  const methods = useFormContext();
  const {
    register,
    getValues,
    control,
    unregister,
    formState: { errors },
  } = methods;

  const paymentMethod = useWatch({
    control,
    name: "stepFour.paymentMethod",
  });

  // Unregistration of the payment method
  useEffect(() => {
    if (paymentMethod === "bank-peru") {
      unregister(["stepFour.paypalEmail", "stepFour.paypalEmailConfirmation"]);
    }

    if (paymentMethod === "paypal") {
      unregister([
        "stepFour.holderName",
        "stepFour.bankAngency",
        "stepFour.bankAccountCode",
      ]);
    }
  }, [paymentMethod]);

  return (
    <FormFour>
      <OptionInput
        className="paymentMethod"
        question="Método de pago"
        type="radio"
        options={[
          ["Paypal", "paypal"],
          ["Cuenta bancaria - Solo para Perú", "bank-peru"],
        ]}
        error={
          errors.stepFour &&
          errors.stepFour.paymentMethod &&
          errors.stepFour.paymentMethod.message
        }
        register={register("stepFour.paymentMethod", {
          required: {
            value: true,
            message: "Por favor, seleccione un método de pago",
          },
        })}
      />
      {paymentMethod === "paypal" && (
        <>
          <TextInput
            className="paypalEmail"
            question="Email de paypal"
            error={
              errors.stepFour &&
              errors.stepFour.paypalEmail &&
              errors.stepFour.paypalEmail.message
            }
            register={register("stepFour.paypalEmail", {
              required: {
                value: true,
                message: "Por favor, indique su email de paypal",
              },
              pattern: {
                value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                message: "Ingrese un email valido",
              },
              validate: {
                min: (v) =>
                  v.length < 6
                    ? "Los email de paypal cuenta con por lo menos 6 caracteres"
                    : true,
              },
            })}
          />

          <TextInput
            className="paypalEmailConfirmation"
            question="Confirma tu email de Paypal"
            error={
              errors.stepFour &&
              errors.stepFour.paypalEmailConfirmation &&
              errors.stepFour.paypalEmailConfirmation.message
            }
            register={register("stepFour.paypalEmailConfirmation", {
              required: {
                value: true,
                message: "Por favor, confirme su email de paypal",
              },
              validate: {
                isTheSame: (v) =>
                  !(v === getValues("stepFour.paypalEmail"))
                    ? "Lo correos no coinciden"
                    : true,
              },
            })}
          />
          <div className="message">
            <p>
              Verifique que su correo Paypal es correcto al 100%. No nos hacemos
              responsables por datos incorrectos.
            </p>
          </div>
        </>
      )}
      {paymentMethod === "bank-peru" && (
        <>
          <TextInput
            className="holderName"
            question="Nombre del titular"
            error={
              errors.stepFour &&
              errors.stepFour.holderName &&
              errors.stepFour.holderName.message
            }
            register={register("stepFour.holderName", {
              required: {
                value: true,
                message: "Por favor, ingrese el nombre del titular",
              },
            })}
          />
          <TextInput
            className="bankAngency"
            question="Agencia bancaria"
            error={
              errors.stepFour &&
              errors.stepFour.bankAngency &&
              errors.stepFour.bankAngency.message
            }
            register={register("stepFour.bankAngency", {
              required: {
                value: true,
                message: "Por favor, ingrese la agencia bancaria",
              },
            })}
          />
          <TextInput
            className="bankAccountCode"
            question="Código de Cuento Interbancaria"
            error={
              errors.stepFour &&
              errors.stepFour.bankAccountCode &&
              errors.stepFour.bankAccountCode.message
            }
            register={register("stepFour.bankAccountCode", {
              required: {
                value: true,
                message: "Por favor, ingrese el código de cuenta interbancaria",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "El código solo debe contener números",
              },
              validate: {
                numberOfDigits: (v) =>
                  v.length !== 20
                    ? "El código debe contar con 20 dígitos"
                    : true,
              },
            })}
          />
          <div className="message">
            <p>
              Solo válido para CCI peruano. Verifique que su CCI es 100%
              correcto. No nos hacemos responsables de datos incorrectos.
            </p>
          </div>
        </>
      )}

      <FileInput
        className="documentationProved"
        question="Prueba de identidad"
        error={
          errors.stepFour &&
          errors.stepFour.documentationProved &&
          errors.stepFour.documentationProved.message
        }
        register={register("stepFour.documentationProved", {
          required: {
            value: true,
            message: "Por favor, ingrese una foto confirmando su identidad",
          },
          validate: {
            size: (v) =>
              v[0].size > 2000000 ? "El archivo puede pesar máximo 2mb" : true,
            type: (v) =>
              !["image/jpeg", "image/jpg", "image/png"].includes(v[0].type)
                ? "El archivo solo puede tener formato PNG, JPG o JPEG"
                : true,
          },
        })}
      />
      <div className="message">
        <p>
          Envía una foto de tu documento en alta resolución y legible, puedes
          cubrir cualquier detalle que desees, excepto la foto, el nombre
          completo y la fecha de nacimiento. (No modificar digitalmente) (Puedes
          usar, DNI, pasaporte o licencia de conducir)
        </p>
      </div>

      <TextInput
        className="referral"
        question="Si tienes un referente añade aquí su código"
        noRequired={true}
        error={
          errors.stepFour &&
          errors.stepFour.referral &&
          errors.stepFour.referral.message
        }
        register={register("stepFour.referral", {
          validate: {
            max: (v) =>
              v && v.length > 10 ? "Máximo 10 caracteres permitidos" : true,
          },
        })}
      />

      <OptionInput
        width="full"
        className="termsAndConditions"
        type="checkbox"
        options={[["Acepto los Términos y Condiciones", "yes"]]}
        error={
          errors.stepFour &&
          errors.stepFour.termsAndConditions &&
          errors.stepFour.termsAndConditions.message
        }
        register={register("stepFour.termsAndConditions", {
          required: {
            value: true,
            message: "Por favor, acepte los Términos y Condiciones",
          },
        })}
      />

      <div className="message terms">
        <h2>
          <b>
            TÉRMINOS Y CONDICIONES PARA LOS ALQUILERES PUBLICITARIOS DE FACEBOOK
          </b>
        </h2>
        <p>
          Los siguientes Términos y Condiciones se aplican al alquiler de su
          perfil de Facebook y con su consentimiento usted acepta estar
          vinculado de este modo.
        </p>
        <p>
          <b>Definiciones</b>
        </p>
        <p>A los efectos de estos Términos y Condiciones::</p>
        <p>
          “Alquiler” del alquiler de su perfil de Facebook al que se aplican
          estos Términos y Condiciones.
        </p>
        <p>
          “FbAngel”, esta web, sus respectivos agentes, subcontratistas,
          directores y empleados.
        </p>
        <p>
          “Propietario” es la persona que proporcionó el perfil de Facebook que
          se está alquilando.
        </p>
        <p>
          “Pago Mensual” es la cantidad pagada al propietario de la cuenta al
          final de cada mes que su cuenta está en uso.
        </p>
        <p>
          “Comisión por referido” es la cantidad pagada a alguien por recomendar
          a otro propietario de perfil de Facebook que conluya en una
          configuración exitosa del Business Manager.
        </p>
        <p>
          “Perfil de Facebook” es el acceso al Business Manager que se alquila.
        </p>
        <p>
          “Business Manager” es una herramienta de Facebook que ayuda a
          organizar y administrar sus cuentas publicitarias completamente
          independientes de su perfil de Facebook.
        </p>
        <p>
          “Administrador de Business Manager” la persona que administra
          activamente el Business Manager en nombre de FbAngel y que se agregará
          para supervisar las cuentas publicitarias.
        </p>
        <p>
          “Cuenta de anuncios” es la cuenta publicitaria de Facebook que está
          configurada dentro de Business Manager.
        </p>
        <p>
          “Configuración de Business Manager” el proceso de configuración del
          Business Manager de Facebook que se alquilará.
        </p>
        <p>
          “Página de Facebook” la página de Facebook creada con la cuenta del
          Propietario.
        </p>
        <p>
          “Publicidad” los anuncios creados por FbAngel en la cuenta del
          Propietario.
        </p>
        <p>
          “Comisión por configuración” es el importe pagado al propietario de la
          cuenta para una configuración correcta del Business Manager.
        </p>
        <p>
          “Servicio de redes sociales de terceros” significa cualquier servicio
          o contenido (incluidos datos, información, productos o servicios)
          proporcionado por un tercero que puede ser mostrado, incluido o puesto
          a disposición por el Servicio.
        </p>
        <p>“Sitio web” se refiere a Mi sitio, accesible desde FbAngel.com</p>
        <p>
          “”Usted o el Propietario”” significa la persona que proporcionó la
          cuenta de publicidad de Facebook que se está alquilando y, en
          cualquier caso, la persona que accede o usa el Servicio, o la empresa
          u otra entidad legal en nombre de la cual dicha persona accede o usa
          el Servicio, según corresponda.
        </p>
        <p>
          “Compañía” (denominada “la Compañía”, “Nosotros” o “Nuestro” en este
          Acuerdo) se refiere a FB Angel.
        </p>
        <p>
          <b>Reconocimiento</b>
        </p>
        <p>
          Estos son los Términos y Condiciones que rigen el uso de este Servicio
          y el acuerdo que opera entre Usted y la Compañía. Estos Términos y
          Condiciones establecen los derechos y obligaciones de todos los
          usuarios con respecto al uso del Servicio.
        </p>
        <p>
          Su acceso y uso del Servicio está condicionado a su aceptación y
          cumplimiento de estos Términos y Condiciones Estos Términos y
          Condiciones se aplican a todos los visitantes, usuarios y otras
          personas que acceden o utilizan el Servicio.
        </p>
        <p>
          Al acceder o utilizar el Servicio, usted acepta regirse por estos
          términos y condiciones. Si no está de acuerdo con alguna parte de
          estos Términos y condiciones, no podrá acceder al Servicio.
        </p>
        <p>
          Usted declara que es mayor de 18 años. La Compañía no permite que
          menores de 18 años utilicen el Servicio.
        </p>
        <p>
          Su acceso y uso del Servicio también está condicionado a su aceptación
          y cumplimiento de la Política de Privacidad de la Compañía Nuestra
          Política de privacidad describe Nuestras políticas y procedimientos
          sobre la recopilación, uso y divulgación de Su información personal
          cuando usa la Aplicación o el Sitio web y le informa sobre Sus
          derechos de privacidad y cómo la ley lo protege. Lea nuestra Política
          de privacidad detenidamente antes de utilizar nuestro servicio.
        </p>
        <p>
          <b>Condiciones de servicio</b>
        </p>
        <p>
          El Titular autoriza a la Empresa, a ejercitar exclusivamente, el
          derecho de acceso y gestión de la cuenta comercial única y
          exclusivamente para la creación de campañas publicitarias relacionadas
          con la Red Social de Facebook, por tiempo indefinido, salvo que las
          partes, de mutuo acuerdo, acuerden a una duración diferente.
        </p>
        <p>
          En virtud de este contrato, la Compañía tiene derecho a ejercitar por
          cuenta propia, en nombre del Titular, las acciones necesarias para
          perseguir la finalidad establecida en el contrato, es decir, para la
          creación, preparación, ejecución y control de campañas publicitarias o
          de comunicación. acciones en Internet y sitios sociales asignadas por
          el Titular.
        </p>
        <p>
          <b>Privacidad</b>
        </p>
        <p>
          Respetamos su privacidad y nunca compartiremos su contraseña ni
          ninguna otra información personal. Durante el proceso de configuración
          de Business Manager, utilizamos una aplicación segura para permitirnos
          configurar sus cuentas publicitarias, a la vez que mantenemos su
          información personal segura.
        </p>
        <p>
          <b>Promesa de propiedad</b>
        </p>
        <p>
          El Propietario garantiza y garantiza que es el propietario legal de la
          Cuenta Publicitaria y que es la única persona con acceso. Además, el
          Propietario garantiza que no hay ninguna irregularidad en la creación
          o adquisición de la cuenta. Además, el Propietario garantiza que no
          necesita ni depende de la capacidad de anunciarse en Facebook.
        </p>
        <p>
          <b>Indemnización</b>
        </p>
        <p>
          El Propietario se compromete a indemnizar a FbAngel si de alguna
          manera ha violado la cláusula promesa de propiedad.
        </p>
        <p>
          <b>Pago</b>
        </p>
        <p>
          FbAngel pagará al propietario la comisión de configuración una vez que
          se haya realizado y aprobado la primera revisión, y se haya
          configurado correctamente un Business Manager.
        </p>
        <p>
          <b>Calendario de pago</b>
        </p>
        <p>FbAngel pagará al Propietario de la siguiente manera:</p>
        <p>
          Primer pago directamente después de haber terminado la configuración
          con éxito y después de la siguiente forma:
        </p>
        <p>
          Los perfiles activados en la primera quincena del mes (primeras 2
          semanas) se pagarán en la semana del 15 del mes siguiente
        </p>
        <p>
          Los perfiles activados dentro de la segunda quincena del mes (2
          últimas semanas) se pagarán en la semana de la última semana del mes
          siguiente.
        </p>
        <p>
          Si el último día del mes cae en un fin de semana o día festivo, el
          pago se enviará el siguiente día hábil.
        </p>
        <p>
          FbAngel no pagará por un perfil de Facebook donde no haya sido posible
          configurar correctament el Business Manager. FbAngel pagará el pago
          mensual de un perfil de Facebook que esté activo durante la mitad del
          mes o más para el mes en particular.
        </p>
        <p>
          Los pagos por cada referido que resulte en una configuración exitosa
          se pagan al final del mes.
        </p>
        <p>
          FbAngel no pagará por un perfil de Facebook donde no haya sido posible
          configurar correctament el Business Manager.
        </p>
        <p>
          <b>Forma de pago</b>
        </p>
        <p>FbAngel enviará pagos por Paypal y transferencia bancaria.</p>
        <p>
          Para ser pagado por banco es necesario enviar una copia de un
          documento para cumplir con los requisitos de nuestro banco,
        </p>
        <p>
          <b>Terminación del alquiler de la cuenta</b>
        </p>
        <p>
          El período de alquiler finalizará el día en que el Business Manager ya
          no esté en uso.
        </p>
        <p>
          FbAngel, a su entera discreción, puede decidir que ya no requiere la
          cuenta y puede interrumpir el período de alquiler.
        </p>
        <p>
          El Alquiler también se cancelará si el Business Manager es desactivado
          por el Propietario o Facebook.
        </p>
        <p>
          Si la cuenta se utilizó durante 15 días o más ese mes, FbAngel
          realizará el pago del pago mensual.
        </p>
        <p>
          El período de alquiler también terminará si se produce un
          incumplimiento material de estos Términos.
        </p>
        <p>
          <b>Violación material</b>
        </p>
        <p>Lo siguiente se considerará una violación material.</p>
        <p>
          En caso de incumplimiento material, FbAngel no será responsable de
          pagar ningún pago futuro.
        </p>
        <p>
          Inicie sesión en Cuenta desde cualquier dispositivo que no se haya
          utilizado antes del comienzo del período de alquiler. Pausar, detener,
          cambiar o interferir de alguna manera con los anuncios de FbAngel.
        </p>
        <p>
          Eliminar o quitar FbAngel Business Manager o Administrador de la
          página de Facebook.
        </p>
        <p>
          Eliminar o quitar el administrador de cuentas de FbAngel del rol
          Administrador de cuentas publicitarias. Uso del método de pago FbAngel
          para cualquier propósito que no sea pagar por los Anuncios creados por
          FbAngel. Permitir que cualquier otra persona o empresa acceda o
          utilice la Cuenta publicitaria.
        </p>
        <p>
          Iniciar sesión en Facebook con un ordenador de sobremesa o portátil
          desde una nueva ubicación que no había iniciado sesión en el período
          anterior al período de alquiler.
        </p>
        <p>Iniciar sesión en el Business Manager por cualquier motivo.</p>
        <p>
          <b>Limitación de responsabilidad</b>
        </p>
        <p>
          El Titular reconoce que la Compañía no se hace responsable de las
          incidencias que pueda sufrir la cuenta por motivos ajenos a su control
          y acción. El Titular declara conocer los riesgos, peligros, así como
          cualquier otra eventualidad y / o incidente que conlleve la exposición
          y uso de un perfil personal y / o profesional en una Red Social que
          opera a través de Internet; asimismo, renuncia a cualquier demanda,
          administrativa, procesal penal, así como a cualquier indemnización.
        </p>
        <p>
          Sin perjuicio de los daños en los que pueda incurrir, la
          responsabilidad total de la Compañía y cualquiera de sus proveedores
          bajo cualquier disposición de estos Términos y Su recurso exclusivo
          para todo lo anterior se limitará al monto realmente pagado por Usted
          a través del Servicio.
        </p>
        <p>
          En la máxima medida permitida por la ley aplicable, en ningún caso la
          Compañía o sus proveedores serán responsables de ningún daño especial,
          incidental, indirecto o consecuente (incluidos, entre otros, daños por
          lucro cesante, pérdida de datos o otra información, por interrupción
          del negocio, por lesiones personales, pérdida de privacidad que surja
          de o de alguna manera relacionada con el uso o la imposibilidad de
          usar el Servicio, software de terceros y / o hardware de terceros
          utilizado con el Servicio, o de lo contrario en relación con cualquier
          disposición de estos Términos), incluso si la Compañía o cualquier
          proveedor han sido informados de la posibilidad de tales daños e
          incluso si el recurso no cumple con su propósito esencial.
        </p>
        <p>
          Algunos estados no permiten la exclusión de garantías implícitas o la
          limitación de responsabilidad por daños incidentales o consecuentes,
          lo que significa que algunas de las limitaciones anteriores pueden no
          aplicarse. En estos estados, la responsabilidad de cada parte estará
          limitada en la mayor medida permitida por la ley.
        </p>
        <p>
          <b>Descargo de responsabilidad “TAL CUAL” y “SEGÚN DISPONIBILIDAD”</b>
        </p>
        <p>
          El Servicio se le proporciona “TAL CUAL” y “SEGÚN DISPONIBILIDAD” y
          con todas las fallas y defectos sin garantía de ningún tipo. En la
          medida máxima permitida por la ley aplicable, la Compañía, en su
          propio nombre y en nombre de sus Afiliadas y sus respectivos
          licenciantes y proveedores de servicios, renuncia expresamente a todas
          las garantías, ya sean expresas, implícitas, legales o de otro tipo,
          con respecto a la Servicio, incluidas todas las garantías implícitas
          de comerciabilidad, idoneidad para un propósito particular, título y
          no infracción, y garantías que puedan surgir del curso del trato, el
          curso del desempeño, el uso o la práctica comercial. Sin limitación a
          lo anterior, la Compañía no ofrece garantía ni compromiso, y no hace
          ninguna representación de ningún tipo de que el Servicio cumplirá con
          Sus requisitos, logrará los resultados previstos, será compatible o
          funcionará con cualquier otro software, aplicación, sistema o
          servicio, operará sin interrupción, cumplir con los estándares de
          rendimiento o confiabilidad o estar libre de errores o que cualquier
          error o defecto pueda o será corregido.
        </p>
        <p>
          Sin perjuicio de lo anterior, ni la Compañía ni ninguno de los
          proveedores de la compañía hace ninguna representación o garantía de
          ningún tipo, expresa o implícita: (i) en cuanto al funcionamiento o
          disponibilidad del Servicio, o la información, contenido y materiales
          o productos. incluido en el mismo; (ii) que el Servicio será
          ininterrumpido o libre de errores; (iii) en cuanto a la precisión,
          confiabilidad o vigencia de cualquier información o contenido
          proporcionado a través del Servicio; o (iv) que el Servicio, sus
          servidores, el contenido o los correos electrónicos enviados desde o
          en nombre de la Compañía están libres de virus, scripts, troyanos,
          gusanos, malware, bombas de tiempo u otros componentes dañinos.
        </p>
        <p>
          Algunas jurisdicciones no permiten la exclusión de ciertos tipos de
          garantías o limitaciones sobre los derechos legales aplicables de un
          consumidor, por lo que algunas o todas las exclusiones y limitaciones
          anteriores pueden no aplicarse a usted. Pero en tal caso, las
          exclusiones y limitaciones establecidas en esta sección se aplicarán
          en la mayor medida exigible según la ley aplicable.
        </p>
        <p>
          <b>Resolución de disputas</b>
        </p>
        <p>
          Si tiene algún problema o disputa sobre el Servicio, acepta primero
          intentar resolver la disputa de manera informal comunicándose con la
          Compañía.
        </p>
        <p>Para usuarios de la Unión Europea (UE)</p>
        <p>
          Si es un consumidor de la Unión Europea, se beneficiará de las
          disposiciones obligatorias de la ley del país en el que reside
        </p>
        <p>
          <b>Divisibilidad y renuncia</b>
        </p>
        <p>
          <i></i>
        </p>
        <p>
          Si alguna disposición de estos Términos se considera inaplicable o
          inválida, dicha disposición se cambiará e interpretará para lograr los
          objetivos de dicha disposición en la mayor medida posible según la ley
          aplicable y las disposiciones restantes continuarán en pleno vigor y
          efecto.
        </p>
        <p>
          <i></i>
        </p>
        <p>
          Salvo lo dispuesto en el presente, el hecho de no ejercer un derecho o
          exigir el cumplimiento de una obligación en virtud de estos Términos
          no afectará la capacidad de una parte para ejercer dicho derecho o
          requerir dicho cumplimiento en cualquier momento posterior, ni la
          renuncia a un incumplimiento constituirá una renuncia a cualquier
          incumplimiento posterior.
        </p>
        <p>
          <b>Interpretación de traducción</b>
        </p>
        <p>
          Estos Términos y Condiciones pueden haberse traducido si los hemos
          puesto a su disposición en nuestro Servicio. Usted acepta que el texto
          original en inglés prevalecerá en caso de disputa Usted acepta que el
          texto original en inglés prevalecerá en caso de disputa.
        </p>
        <p>
          <b>Cambios a estos términos y condiciones</b>
        </p>
        <p>
          Nos reservamos el derecho, a nuestro exclusivo criterio, de modificar
          o reemplazar estos Términos en cualquier momento. Si una revisión es
          importante, haremos todos los esfuerzos razonables para proporcionar
          un aviso de al menos 30 días antes de que entren en vigor los nuevos
          términos. Lo que constituye un cambio material se determinará a
          nuestro exclusivo criterio.
        </p>
        <p>
          Al continuar accediendo o utilizando Nuestro Servicio después de que
          esas revisiones entren en vigencia, usted acepta estar sujeto a los
          términos revisados. Si no está de acuerdo con los nuevos términos, en
          su totalidad o en parte, deje de usar el sitio web y el Servicio.
        </p>
        <p>
          <b>Contáctenos</b>
        </p>
        <p>
          Si tiene alguna pregunta sobre estos Términos y condiciones, puede
          contactarnos
        </p>
      </div>

      <OptionInput
        width="full"
        className="gdprAgreement"
        type="checkbox"
        options={[
          [
            "Doy mi consentimiento para que este sitio web almacene mi información enviada para que puedan responder a mi consulta.",
            "yes",
          ],
        ]}
        error={
          errors.stepFour &&
          errors.stepFour.gdprAgreement &&
          errors.stepFour.gdprAgreement.message
        }
        register={register("stepFour.gdprAgreement", {
          required: {
            value: true,
            message: "Por favor, acepte el Acuerdo GDPR",
          },
        })}
      />
    </FormFour>
  );
};

export default StepFour;
