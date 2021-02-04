import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardTitle from "@saleor/components/CardTitle";
import MultiAutocompleteSelectField, {
  MultiAutocompleteChoiceType
} from "@saleor/components/MultiAutocompleteSelectField";
import { FormChange } from "@saleor/hooks/useForm";
import { FetchMoreProps, SearchProps } from "@saleor/types";
import React from "react";
import { useIntl } from "react-intl";

interface ShippingZoneWarehousesFormData {
  warehouses: string[];
}
interface ShippingZonewWarehousesProps extends FetchMoreProps, SearchProps {
  data: ShippingZoneWarehousesFormData;
  displayValues: MultiAutocompleteChoiceType[];
  warehouses: MultiAutocompleteChoiceType[];
  onChange: FormChange;
  onWarehouseAdd: () => void;
}

export const ShippingZoneWarehouses: React.FC<ShippingZonewWarehousesProps> = props => {
  const {
    data,
    displayValues,
    hasMore,
    loading,
    warehouses,
    onChange,
    onFetchMore,
    onSearchChange,
    onWarehouseAdd
  } = props;
  const intl = useIntl();

  return (
    <Card>
      <CardTitle
        title={intl.formatMessage({
          defaultMessage: "Local",
          description: "section header"
        })}
      />
      <CardContent>
        <MultiAutocompleteSelectField
          add={{
            label: intl.formatMessage({
              defaultMessage: "Agregar nuevo Local",
              description: "button"
            }),
            onClick: onWarehouseAdd
          }}
          choices={warehouses}
          displayValues={displayValues}
          fetchChoices={onSearchChange}
          hasMore={hasMore}
          helperText={intl.formatMessage({
            defaultMessage:
              "Seleccionar local desde donde se enviaran los productos."
          })}
          label={intl.formatMessage({
            defaultMessage: "Local",
            description: "autocomplete select label",
            id: "shippingZoneWarehouses.autocomplete.label"
          })}
          loading={loading}
          name="warehouses"
          onChange={onChange}
          onFetchMore={onFetchMore}
          placeholder={intl.formatMessage({
            defaultMessage: "Elegir local",
            description: "input placeholder"
          })}
          value={data.warehouses}
        />
      </CardContent>
    </Card>
  );
};
ShippingZoneWarehouses.displayName = "ShippingZoneWarehouses";
export default ShippingZoneWarehouses;
