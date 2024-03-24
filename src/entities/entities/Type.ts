import { Column, Entity } from "typeorm";

@Entity("type", { schema: "airlinelebanon" })
export class Type {
  @Column("int", { primary: true, name: "type_id" })
  typeId: number;

  @Column("varchar", { name: "type_name", length: 80 })
  typeName: string;
}
